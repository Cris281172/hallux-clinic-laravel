<?php

namespace App\Models\Store;

use App\Observers\ProductObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Store\ProductImage;
use App\Models\Store\Category;
#[ObservedBy(ProductObserver::class)]
class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'description', 'price', 'type', 'is_active', 'variants'];

    protected $appends = ['promotion_active'];

    public function getPromotionActiveAttribute()
    {
        return $this->activePromotion(auth()->user());
    }
    public function images(){
        return $this->hasMany(ProductImage::class, 'product_id', 'id');
    }
    public function categories(){
        return $this->belongsToMany(
            Category::class,
            'category_products',
            'product_id',
            'category_id'
        );
    }
    public function variants(){
        return $this->belongsToMany(Variant::class, 'product_variants', 'product_id', 'variant_id');
    }
    public function attributes(){
        return $this->belongsToMany(Attribute::class, 'product_attributes', 'product_id', 'attribute_id');
    }
    public function similarProductsObserver()
    {
        return $this->belongsToMany(Product::class, 'product_similar', 'product_id', 'product_similar_id');
    }
    public function releatedAsPrimary()
    {
        return $this->belongsToMany(Product::class, 'product_similar', 'product_id', 'product_similar_id')->with('images', 'categories');
    }

    public function releatedAsSecondary()
    {
        return $this->belongsToMany(Product::class, 'product_similar', 'product_similar_id', 'product_id')->with('images', 'categories');
    }

    public function similarProducts()
    {
        return $this->releatedAsPrimary->merge($this->releatedAsSecondary);
    }
    public function promotions(){
        return $this->belongsToMany(Promotion::class, 'promotion_products', 'product_id', 'promotion_id');
    }

    public function activePromotion($user = null)
    {
        $now = now();

        $productPromos = $this->promotions()->get();

        $categoryPromos = $this->categories
            ->flatMap(fn($category) => $category->promotions)
            ->unique('id');

        $allPromos = $productPromos->merge($categoryPromos);

        $filterPromos = $allPromos->filter(function($promo) use ($user, $now) {
            $userCount = OrderItem::select('order_items.*')
                ->join('orders', 'orders.id', '=', 'order_items.order_id')
                ->where('order_items.promotion_id', $promo->id)
                ->where('orders.user_id', auth()->id())
                ->count();

            if($userCount >= $promo->count_per_user) return false;

            if(!$promo->active) return false;
            if($promo->start_date && $promo->start_date > $now) return false;
            if($promo->end_date && $promo->end_date < $now) return false;

            if($promo->visibility === 'all') return true;
            if($promo->visibility === 'logged_in') return $user !== null;
            if($promo->visibility === 'specific_users') return $user && $promo->users->contains($user->id);

            return false;
        })->values();

        return $filterPromos->map(function($promo) use ($user, $now) {
           if($promo->discount_type === 'fixed') $promo->final_discount = $this->price - $promo->discount_value;
           else if($promo->discount_type === 'percent') $promo->final_discount = $this->price - ($this->price * ( $promo->discount_value / 100));
           return $promo;
        })->sortBy('final_discount')->first();

    }
}

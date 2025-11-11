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
}

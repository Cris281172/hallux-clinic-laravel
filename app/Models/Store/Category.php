<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'parent_id'];

    public function children(){
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    public function childrenRecursive(){
        return $this->children()->with('childrenRecursive');
    }

    public function allChildrenIds(){
        $ids = [$this->id];

        foreach($this->children as $child){
            $ids = array_merge($ids, $child->allChildrenIds());
        }

        return $ids;
    }
    public function productsCount()
    {
        return Product::whereHas('categories', function($q){
            $q->whereIn('categories.id', $this->allChildrenIds());
        })->count();
    }
    public function promotions()
    {
        return $this->belongsToMany(Promotion::class, 'promotion_categories', 'category_id', 'promotion_id');
    }
}

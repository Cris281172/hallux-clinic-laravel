<?php

namespace App\Services;

class CategoryService
{
    public function map($categories)
    {
        return $categories->map(function ($cat) {
            $children = $cat->childrenRecursive()->get();
            return [
                'id' => $cat->id,
                'name' => $cat->name,
                'slug' => $cat->slug,
                'products_count' => $cat->productsCount(),
                'children' => $this->map($children),
            ];
        });
    }

}

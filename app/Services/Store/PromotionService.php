<?php

namespace App\Services\Store;

use App\Models\User;

class PromotionService
{
    public function getActivePromotionsForProduct($product, ?User $user)
    {
        return $product->activePromotions($user)->get();
    }

    public function getActivePromotionsForCategory($category, ?User $user)
    {
        return $category->activePromotions($user)->get();
    }
}

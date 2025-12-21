<?php
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use App\Models\AdminsUser;

Broadcast::channel('chat.{id}', function ($user, $id) {
    return true;
});

Broadcast::channel('support.admin', function ($user) {
    $isAdmin = AdminsUser::where('user_id', $user->id)->firstOrFail();
    if($isAdmin) {
        return true;
    }
    return false;
});

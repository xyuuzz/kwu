<?php

namespace App\Http\Controllers;

use App\Models\{
    Profile,
    User
};

class ProfileController extends Controller
{
//    menggunakan method scopeBindings, method ini adalah fitur terbaru dari laravel 9
    public function show(User $user, Profile $profile)
    {
        $data = $profile->load("user");
        return view("profile", compact("data"));
    }
}

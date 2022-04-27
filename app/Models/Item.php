<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        "name",
        "price",
        "banner",
        "status"
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class);
    }

    public function sugestionUser()
    {
        return $this->hasMany(Sugestion::class);
    }

    public function owned()
    {
        return $this->belongsTo(Seller::class);
    }
}

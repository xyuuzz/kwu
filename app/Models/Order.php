<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        "queue_for_today",
        "total",
        "status",
        "day"
    ];

    public function items()
    {
        return $this->belongsToMany(Item::class);
    }

    public function theSeller()
    {
        return $this->belongsTo(Seller::class);
    }

    public function customer()
    {
        return $this->belongsTo(User::class);
    }
}

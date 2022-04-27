<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sugestion extends Model
{
    protected $fillable = [
        "description",
        "rating"
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function buyer()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    protected $fillable = [
        "card_id",
        "saldo"
    ];
    
    public function owned()
    {
        return $this->belongsTo(User::class);
    }
}

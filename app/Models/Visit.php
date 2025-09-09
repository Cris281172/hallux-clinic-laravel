<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\VisitStatus;

class Visit extends Model
{
    use HasFactory;
    protected $fillable = ['patient_id', 'user_id', 'description', 'status_id', 'price', 'date', "job_id"];

    public function status(){
        return $this->belongsTo(VisitStatus::class, 'status_id', 'id');
    }
    public function patient(){
        return $this->belongsTo(Patient::class, 'patient_id', 'id');
    }
    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function visitNotification(){
        return $this->hasone(VisitNotification::class, 'visit_id', 'id');
    }
}

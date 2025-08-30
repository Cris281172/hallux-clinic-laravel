<?php

namespace App\Jobs;

use App\Models\Visit;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendVisitReminder implements ShouldQueue
{
    use Queueable;

    private $visit_id;

    /**
     * Create a new job instance.
     */
    public function __construct($visit_id)
    {
        $this->visit_id = $visit_id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $visit = Visit::find($this->visit_id);

        if(!$visit || $visit->status_id !== 1){
            return;
        }

        if(!$visit->patient || !$visit->patient->phone){
            return;
        }

        $params = array(
            'to'       => $visit->patient->phone,
            'from'     => 'Podolog',
            'message'  => 'Przypomnienie: wizyta u podologa 26.08.2025, godz. 18:00 – Hallux Clinic.',
            'fast'     => '0',
            'format'   => 'json'
        );

        $url = 'https://api.smsapi.pl/sms.do';

        $c = curl_init();
        curl_setopt($c, CURLOPT_URL, $url);
        curl_setopt($c, CURLOPT_POST, true);
        curl_setopt($c, CURLOPT_POSTFIELDS, $params);
        curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($c, CURLOPT_HTTPHEADER, array(
            "Authorization: Bearer" . " " . env('SMS_API_TOKEN'),
        ));

        $content = curl_exec($c);
        curl_close($c);

        var_dump($content);
    }
}

<?php

namespace App\Jobs;

use App\Models\ReminderPhone;
use App\Models\Visit;
use App\Models\VisitNotification;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Str;
class SendVisitReminder implements ShouldQueue
{
    use Queueable;

    private $visit_id;
    public $jobID;

    /**
     * Create a new job instance.
     */
    public function __construct($visit_id)
    {
        $this->visit_id = $visit_id;
        $this->jobID = 'visit:' . Str::uuid();
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

        if(!$visit->visitNotification || !$visit->visitNotification->phone){
            return;
        }

        $carbon = Carbon::parse($visit->date);
        $date = $carbon->format('d.m.Y');
        $time = $carbon->format('H:i');
        $params = array(
            'to'       => $visit->visitNotification->phone,
            'from'     => '2way',
            'message'  => 'Przypomnienie: wizyta u podologa ' . $date  . ' godz. ' . $time . ' Hallux Clinic. Aby potwierdzic, odpisz: TAK. W razie pytan prosimy o tel. 459 410 096.',
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

        $content = json_decode(curl_exec($c), true);
        VisitNotification::where('visit_id', $this->visit_id)->update([
            'msg_id' => $content['list'][0]['id'],
        ]);

        curl_close($c);

        var_dump($content);
    }
}

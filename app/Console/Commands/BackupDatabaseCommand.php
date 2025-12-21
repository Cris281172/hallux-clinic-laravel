<?php

namespace App\Console\Commands;

use App\Models\Backup;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use App\Services\GoogleDriveService;

class BackupDatabaseCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:backup-database-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $googleDriveService = new GoogleDriveService();

        $files = $this->getFiles();

        if(count($files) > 4){
            usort($files, fn ($a, $b) => $b['created_at'] <=> $a['created_at']);

            $fileToDelete = Backup::where('filename', storage_path('app/private/Laravel/' . $files[count($files) - 1]['filename']))->first();
            unlink($fileToDelete->filename);
            $googleDriveService->deleteOldFiles($fileToDelete->file_id);
            Backup::where('id', $fileToDelete->file_id)->delete();
        }

        Artisan::call('backup:run');

        $lastFile = storage_path('app/private/Laravel/' . $this->getLastFile()['filename']);

        $googleDriveService->uploadFile($lastFile);

    }
     private  function getLastFile(){
        $files = $this->getFiles();
        usort($files, fn ($a, $b) => $b['created_at'] <=> $a['created_at']);
        return $files[0];
     }

    private function getFiles()
    {
        $files = scandir(storage_path('app/private/Laravel'));
        $files = array_filter($files, fn ($file) => str_contains($file, '.zip'));
        $files = array_values($files);
        return array_map(function ($file){
            return [
                'filename' => $file,
                'created_at' => date('Y-m-d H:i:s', filectime(storage_path('app/private/Laravel/'.$file))),
            ];
        }, $files);
    }
}

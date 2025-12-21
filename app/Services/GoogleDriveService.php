<?php

namespace App\Services;

use App\Models\Backup;
use Google_Client;
use Google_Service_Drive;
use Google_Service_Drive_DriveFile;
use Google_Service_Drive_Permission;

class GoogleDriveService {
    public function uploadFile($file){
        $client = new Google_Client();
        $client->setAuthConfig(base_path().'/hallux-clinic-462706-3b5bb0b7cfac.json');
        $client->addScope(Google_Service_Drive::DRIVE);

        $filePathArray = explode('/', $file);
        $fileName = $filePathArray[count($filePathArray)-1];

        $service = new Google_Service_Drive($client);


        $fileMetaData = new Google_Service_Drive_DriveFile([
            'name' => $fileName,
        ]);

        $content = file_get_contents($file);

        $uploadedFile = $service->files->create($fileMetaData, [
            'data' => $content,
            'mimeType' => 'application/octet-stream',
            'uploadType' => 'multipart',
        ]);

        $permission = new Google_Service_Drive_Permission([
            'type' => 'user',
            'role' => 'writer',
            'emailAddress' => 'hallux.clinic@gmail.com'
        ]);

        $service->permissions->create($uploadedFile->getId(), $permission);
        Backup::create([
            'file_id' => $uploadedFile->getId(),
            'filename' => storage_path('app/private/Laravel/' . $fileName),
        ]);
    }
    public function deleteOldFiles($fileID){
        $client = new Google_Client();
        $client->setAuthConfig(base_path().'/hallux-clinic-462706-3b5bb0b7cfac.json');
        $client->addScope(Google_Service_Drive::DRIVE);

        $service = new Google_Service_Drive($client);

        $service->files->delete($fileID);
    }
}

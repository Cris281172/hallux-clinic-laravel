<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GithubDeployController extends Controller
{
    public function deploy(Request $request){
        $project_path = base_path();

        \Log::info("Webhook started");

        exec("cd $project_path && git pull origin main 2>&1", $output);
        \Log::info("Git output: " . implode("\n", $output));

    }
}

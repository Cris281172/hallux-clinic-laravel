<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GithubDeployController extends Controller
{
    public function deploy(Request $request)
    {
        $project_path = base_path();

        \Log::info("🚀 Webhook started at " . now());

        $commands = [
            "cd $project_path",
            "git pull --no-rebase origin main",
            "php artisan cache:clear",
            "php artisan config:clear",
            "php artisan route:clear",
            "php artisan view:clear",
            "npm ci",
            "npm run build",
        ];

        $fullCommand = implode(' && ', $commands);

        exec($fullCommand . " 2>&1", $output, $statusCode);

        \Log::info("📦 Deployment output:\n" . implode("\n", $output));

        if ($statusCode === 0) {
            \Log::info("✅ Deployment completed successfully.");
        } else {
            \Log::error("❌ Deployment failed with status code: $statusCode");
        }

        return response('OK', 200);
    }
}

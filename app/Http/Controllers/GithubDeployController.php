<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GithubDeployController extends Controller
{
    public function deploy(Request $request)
    {
        $project_path = base_path();
        Log::info("🚀 Webhook started at " . now());

        // Krok 1: Git pull
        exec("cd $project_path && git pull --no-rebase origin main 2>&1", $gitOutput, $gitStatus);
        Log::info("📦 Git output:\n" . implode("\n", $gitOutput));

        // Krok 2: Laravel cache clear
        $artisanCommands = [
            'php artisan cache:clear',
            'php artisan config:clear',
            'php artisan route:clear',
            'php artisan view:clear',
        ];

        foreach ($artisanCommands as $cmd) {
            exec("cd $project_path && $cmd 2>&1", $artisanOutput);
            Log::info("🔧 $cmd:\n" . implode("\n", $artisanOutput));
        }

        Log::info("📦 Composer output:\n" . implode("\n", $composerOutput));

        // Krok 4: NPM install
        exec("cd $project_path && npm ci 2>&1", $npmInstallOutput, $npmInstallStatus);
        Log::info("📦 NPM CI output:\n" . implode("\n", $npmInstallOutput));

        // Krok 5: NPM build
        exec("cd $project_path && npm run build 2>&1", $npmBuildOutput, $npmBuildStatus);
        Log::info("🎯 NPM Build output:\n" . implode("\n", $npmBuildOutput));

        // Status końcowy
        if ($gitStatus === 0 && $composerStatus === 0 && $npmInstallStatus === 0 && $npmBuildStatus === 0) {
            Log::info("✅ Deployment completed successfully.");
            return response('OK', 200);
        } else {
            Log::error("❌ Deployment failed. Status codes: git=$gitStatus, composer=$composerStatus, npm_install=$npmInstallStatus, npm_build=$npmBuildStatus");
            return response('Deployment failed', 500);
        }
    }
}

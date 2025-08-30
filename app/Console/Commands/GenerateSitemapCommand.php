<?php

namespace App\Console\Commands;

use App\Models\Post;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemapCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:sitemap';

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
        $services = config('treatments');

        $sitemap = Sitemap::create();


        $sitemap->add(Url::create('/'));
        $sitemap->add(Url::create('/o-mnie'));
        $sitemap->add(Url::create('/cennik'));
        $sitemap->add(Url::create('/kontakt'));
        $sitemap->add(Url::create('/faq'));
        $sitemap->add(Url::create('/blog'));

        $posts = Post::all();

        foreach ($posts as $post) {

            $sitemap->add(Url::create($post->slug));

        }

        foreach ($services as $categorySlug => $category) {
            $sitemap->add(Url::create("/uslugi/{$categorySlug}"));

            foreach ($category['services'] as $serviceSlug => $service) {
                $sitemap->add(Url::create("/uslugi/{$categorySlug}/{$serviceSlug}"));
            }
        }
        $sitemap->writeToFile(public_path('sitemap.xml'));
        $this->info('Sitemap has been generated successfully!');
    }
}

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


        $sitemap->add(Url::create(route('home')));
        $sitemap->add(Url::create(route('about-us')));
        $sitemap->add(Url::create(route('price-list')));
        $sitemap->add(Url::create(route('contact')));
        $sitemap->add(Url::create(route('faq')));
        $sitemap->add(Url::create(route('blog.post.get.all')));
        $sitemap->add(Url::create(route('service-type-selector')));

        $posts = Post::all();

        foreach ($posts as $post) {

            $sitemap->add(
                Url::create(route('blog.post.get', $post->slug))
                    ->setLastModificationDate($post->updated_at)
            );

        }

        foreach ($services as $serviceType => $categories) {
            $sitemap->add(Url::create(route('service-category', $serviceType)));

            foreach ($categories as $categorySlug => $category) {
                $sitemap->add(Url::create(route('service-item', [$serviceType, $categorySlug])));

                foreach ($category['services'] ?? [] as $serviceSlug => $service) {
                    $sitemap->add(Url::create(route('service-details', [$serviceType, $categorySlug, $serviceSlug])));
                }
            }
        }
        $sitemap->writeToFile(public_path('sitemap.xml'));
        $this->info('Sitemap has been generated successfully!');
    }
}

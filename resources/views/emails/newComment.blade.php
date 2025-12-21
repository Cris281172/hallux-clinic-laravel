Nowy komentarz o treści: {{ $comment->text  }}
<a href={{route('dashboard.blog.comment.change.published.by.email', ["token" => $comment->token, "published" => '1'])}}>
    Zaakceptuj
</a>
<a href={{route('dashboard.blog.comment.delete.by.email', ["token" => $comment->token])}}>
    Usuń
</a>

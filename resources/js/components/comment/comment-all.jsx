import CommentAdd from './comment-add.jsx';

const CommentAll = ({ postID, comments }) => {
    if (comments.data.length === 0) {
        return;
    }

    return (
        <div>
            <h3>Komentarze</h3>
            <div className={'flex flex-col gap-3'}>
                {comments.data.map((comment, index) => (
                    <div>
                        <div className={'rounded-2xl bg-gray-600 p-3'} key={index}>
                            <div className={'flex justify-between'}>
                                <h5>{comment.username}</h5>
                                <p>{comment.created_at}</p>
                            </div>
                            <p>{comment.text}</p>
                            <CommentAdd postID={postID} type={'children'} parentID={comment.id} />
                        </div>
                        {comment.published_subcomments.map((subcomment, index) => (
                            <div className={'rounded-2xl bg-gray-600 p-3'} key={index}>
                                <div className={'flex justify-between'}>
                                    <h5>{subcomment.username}</h5>
                                    <p>{subcomment.created_at}</p>
                                </div>
                                <p>{subcomment.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentAll;

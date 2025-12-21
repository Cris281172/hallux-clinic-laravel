import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '../ui/input.js';
import { Textarea } from '../ui/textarea.js';

const CommentAdd = ({ postID, parentID, type }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { data, setData, post } = useForm({
        text: '',
        email: '',
        username: '',
        post_id: postID,
        parent_id: parentID,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('blog.post.add.comment'));
        setDialogOpen(false);
        toast('Komentarz', {
            description: 'Komentarz został dodany i czeka na weryfikacje ',
        });
    };

    return (
        <>
            <Dialog open={dialogOpen}>
                <DialogTrigger onClick={() => setDialogOpen(true)}>{type === 'parent' ? 'Dodaj komentarz' : 'Dodaj odpowiedź'}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dodaj komentarz</DialogTitle>
                        <form onSubmit={handleSubmit}>
                            <div className={'flex gap-5'}>
                                <Input
                                    value={data.username}
                                    onChange={(e) => setData('username', e.target.value)}
                                    placeholder={'Podaj nazwę użytkownika'}
                                    title={'Nazwa użytkownika'}
                                />
                                <Input
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder={'Podaj email'}
                                    title={'Email'}
                                />
                            </div>
                            <Textarea
                                value={data.text}
                                onChange={(e) => setData('text', e.target.value)}
                                placeholder="Dodaj komentarz"
                                id="short_desc"
                            />
                            <button type={'submit'}>Dodaj komenatrz</button>
                        </form>
                        {/*<DialogDescription>*/}
                        {/*    This action cannot be undone. This will permanently delete your account and remove your data from our servers.*/}
                        {/*</DialogDescription>*/}
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CommentAdd;

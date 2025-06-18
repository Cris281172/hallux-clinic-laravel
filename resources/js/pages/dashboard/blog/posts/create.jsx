import { useForm } from '@inertiajs/react';

import JoditEditor from 'jodit-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../../components/ui/dialog.tsx';
import { Input } from '../../../../components/ui/input.tsx';
import { Label } from '../../../../components/ui/label.tsx';
import { Textarea } from '../../../../components/ui/textarea.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const Create = ({ item, type }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [blobImagePreview, setBlobImagePreview] = useState(item ? `${import.meta.env.VITE_APP_URL}/storage/posts/${item.image}` : '');

    const config = useMemo(
        () => ({
            style: {
                color: '#000',
            },
            readonly: false,
            placeholder: 'Start typings...',
        }),

        [],
    );

    const { data, setData, post, processing, wasSuccessful, errors, reset } = useForm({
        title: item ? item.title : '',
        slug: item ? item.slug : '',
        short_desc: item ? item.short_desc : '',
        desc: item ? item.desc : '',
        file: item ? item.image : '',
    });
    const editor = useRef(null);

    const [editorContent, setEditorContent] = useState(data.desc ? data.desc : '');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData('desc', editorContent);
        await (type === 'create' ? post(route('dashboard.blog.post.create', {})) : post(route('dashboard.blog.post.edit', item.id)));
    };

    const handleFileChange = (e) => {
        setData('file', e.target.files[0]);
        setBlobImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        if (wasSuccessful) {
            setDialogOpen(true);
            reset();
        }
    }, [wasSuccessful]);

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie postu na blog'} />
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="title">Tytuł</Label>
                        <Input
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            type="text"
                            id="title"
                            placeholder="Podaj tytuł posta"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="slug">Slug</Label>
                        <Input value={data.slug} onChange={(e) => setData('slug', e.target.value)} type="text" id="slug" placeholder="Podaj slug" />
                        {errors.slug && <>Bład w slug</>}
                    </div>
                    <div className="col-span-3 grid w-full items-center gap-1.5">
                        <Label htmlFor="short_desc">Krótki opis</Label>
                        <Textarea
                            value={data.short_desc}
                            onChange={(e) => setData('short_desc', e.target.value)}
                            placeholder="Podaj krótki opis"
                            id="short_desc"
                        />
                    </div>
                    <div className="col-span-3 grid w-full items-center gap-1.5">
                        <Label>Treść posta</Label>
                        <JoditEditor
                            onBlur={(newContent) => setData('desc', newContent)}
                            ref={editor}
                            value={editorContent}
                            config={config}
                            onChange={(newContent) => setEditorContent(newContent)}
                        />
                    </div>
                </div>

                <div className="w-full">
                    <Label htmlFor="image">Zdjęcie</Label>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <Input id="image" type="file" onChange={handleFileChange} />
                        <img className={'aspect-square w-full max-w-100 object-cover'} src={blobImagePreview} />
                    </div>
                </div>
                <Button type="submit" disabled={processing}>
                    {type === 'create' ? 'Dodaj' : 'Edytuj'}
                </Button>
            </form>
            <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Gratulacje!</DialogTitle>
                        <DialogDescription>Post został {type === 'create' ? 'zapisany' : 'edytowany'} zapisany poprawnie :D</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </DashboardLayout>
    );
};

export default Create;

import { useForm } from '@inertiajs/react';

import { GoogleGenAI } from '@google/genai';
import { useRef, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { toast } from 'sonner';
import EditorJSComponent from '../../../../components/editor-js-component.jsx';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../../components/ui/dialog.tsx';
import { Input } from '../../../../components/ui/input.tsx';
import { Label } from '../../../../components/ui/label.tsx';
import { Textarea } from '../../../../components/ui/textarea.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import getR2Url from '../../../../utils/getR2Url.js';
import toSlug from '../../../../utils/toSlug.js';

const EditorPost = ({ item, type }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [blobImagePreview, setBlobImagePreview] = useState(item ? getR2Url(item.image) : undefined);
    const ejInstance = useRef(null);

    const [fetchAiLoader, setFetchAiLoader] = useState(false);
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const { data, setData, post, processing, errors, reset } = useForm({
        title: item ? item.title : '',
        slug: item ? item.slug : '',
        short_desc: item ? item.short_desc : '',
        desc: item ? item.desc : '',
        file: item ? item.image : '',
    });
    const [editorData, setEditorData] = useState(item?.desc ? { time: Date.now(), blocks: JSON.parse(item.desc), version: '2.26.5' } : null);

    const handleEditorChange = (data) => {
        setEditorData(data);
        setData('desc', JSON.stringify(data.blocks));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await (type === 'create'
            ? post(route('dashboard.blog.post.create'), {
                  onSuccess: () => {
                      toast.success('Wpis na bloga został dodany');
                      reset();
                  },
                  onError: () => {
                      toast.error('Wystąpił błąd.');
                  },
              })
            : post(route('dashboard.blog.post.edit', item.id), {
                  onSuccess: () => {
                      toast.success('Wpis na bloga edytowany');
                  },
                  onError: () => {
                      toast.error('Wystąpił błąd.');
                  },
              }));
    };

    const handleFileChange = (e) => {
        setData('file', e.target.files[0]);
        setBlobImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    const generateText = async () => {
        if (ejInstance.current) {
            if (data.title.length === 0) {
                return toast.error('Aby wygenerować treść posta należy podać tytuł posta.');
            }

            await ejInstance.current.isReady;

            setFetchAiLoader(true);

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Wygeneruj mi treść posta na blog, który będzie w formacie editorjs, bez żadnych dopisków nie pasujących do JS, odpowiedź ma mieć minimum 5000 znaków, o tytule: ${data.title}`,
            });

            const apiData = JSON.parse(response.text.replace(/```/g, '').replace('json', ''));

            ejInstance.current.render({
                blocks: apiData.blocks,
            });

            handleEditorChange(apiData);
            setFetchAiLoader(false);
        }
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie postu na blog'} />
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="title">Tytuł</Label>
                        <Input
                            value={data.title}
                            onChange={(e) => {
                                setData('title', e.target.value);
                                setData('slug', toSlug(e.target.value.replace(' ', '-')));
                            }}
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
                        <EditorJSComponent data={editorData} onChange={handleEditorChange} ejInstance={ejInstance} />
                    </div>
                </div>
                <Button type={'button'} className={'min-w-50'} onClick={generateText} disabled={fetchAiLoader}>
                    {fetchAiLoader ? <PacmanLoader size={10} /> : <>Wygeneruj treść z AI :)</>}
                </Button>
                <div className="w-full">
                    <Label htmlFor="image">Zdjęcie</Label>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <Input id="image" type="file" onChange={handleFileChange} />
                        <img className={'aspect-square w-full max-w-100 object-cover'} src={blobImagePreview} />
                    </div>
                </div>
                <Button type="submit" disabled={processing || fetchAiLoader}>
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

export default EditorPost;

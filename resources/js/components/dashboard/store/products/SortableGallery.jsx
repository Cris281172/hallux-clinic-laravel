import { closestCenter, DndContext } from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CircleX, Star } from 'lucide-react';
import { useState } from 'react';
import getR2Url from '../../../../utils/getR2Url.js';

function SortableItem({ id, url, onRemove, isMain }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-card flex min-w-[68] flex-col items-center rounded-md border p-2 shadow-sm"
        >
            <div className={'relative z-10'}>
                <div className={'absolute top-0 left-0 flex w-full justify-between p-3'}>
                    {isMain ? <Star className={'text-yellow-500'} /> : <div></div>}
                    <CircleX onPointerDown={(e) => e.stopPropagation()} onClick={(e) => onRemove(id)} size={32} className="cursor-pointer" />
                </div>
                <img src={url} alt="" className="h-68 w-68 rounded-md object-cover" />
            </div>
        </div>
    );
}

export default function SortableGallery({ images, setImages }) {
    const [idCounter, setIdCounter] = useState(0);
    const handleAddImages = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file, idx) => ({
            id: `img-${idCounter + Math.random()}`,
            file,
            url: URL.createObjectURL(file),
            order: images.length + idx,
        }));
        setIdCounter((prev) => prev + files.length);

        setImages([...images, ...newImages]);
    };

    const handleRemove = (id) => {
        setImages(images.filter((img) => img.id !== id));
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;

        if (active.id !== over.id) {
            const oldIndex = images.findIndex((i) => i.id === active.id);
            const newIndex = images.findIndex((i) => i.id === over.id);
            const newOrder = arrayMove(images, oldIndex, newIndex);

            setImages(
                newOrder.map((img, idx) => ({
                    ...img,
                    order: idx,
                })),
            );
        }
    };

    return (
        <div className="space-y-4">
            <input type="file" multiple accept="image/*" onChange={handleAddImages} id="files" className={'hidden'} />
            <label htmlFor="files" className={'underline'}>
                Dodaj zdjęcie
            </label>
            {images && images.length > 0 && (
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={images.map((i) => i.id)} strategy={horizontalListSortingStrategy}>
                        <div className="scrollbar-none flex w-full snap-x gap-4 overflow-x-auto p-2">
                            {images.map((img, index) => (
                                <div key={img.id} className="min-w-[150px] flex-shrink-0 snap-start">
                                    <SortableItem id={img.id} url={img.url || getR2Url(img.filename)} isMain={index === 0} onRemove={handleRemove} />
                                </div>
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            )}
        </div>
    );
}

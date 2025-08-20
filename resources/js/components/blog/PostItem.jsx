import { Link } from '@inertiajs/react';
import { formatDate } from '../../utils/dateUtils.js';
import getR2Url from '../../utils/getR2Url.js';

const PostItem = ({ item, index }) => {
    return (
        <div className={'mb-15 flex flex-col justify-between gap-7 border-b-2 border-[#F7AACBFF] pb-15 md:flex-row'} key={item.id}>
            <img
                className={`${index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'} aspect-square w-48 rounded-2xl object-cover`}
                src={getR2Url(item.image)}
            />
            <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} flex w-full flex-col justify-between`}>
                <div>
                    <p className={'text-xs text-gray-500'}>{formatDate(item.created_at)}</p>
                    <h2 className={'text-dark-plum text-2xl font-bold'}>{item.title}</h2>
                    <p className={'text-black'}>{item.short_desc}</p>
                </div>
                <Link
                    href={`/${item.slug}`}
                    className={
                        'bg-neon-blossom hover:bg-dark-plum-500 mt-3 flex w-50 justify-center rounded-full px-4 py-2 font-bold text-white transition'
                    }
                >
                    Zobacz więcej
                </Link>
            </div>
        </div>
    );
};

export default PostItem;

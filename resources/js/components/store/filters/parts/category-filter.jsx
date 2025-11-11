import { Link, usePage } from '@inertiajs/react';

const CategoryFilter = ({ parentCategory, categories }) => {
    const { props } = usePage();
    const currentCategory = props.ziggy.location.slice(props.ziggy.location.lastIndexOf('/') + 1);

    return (
        <>
            {parentCategory && (
                <p>
                    cofnij do:
                    <Link href={`/sklep/kategoria/${parentCategory.slug}`}> {parentCategory.name}</Link>
                </p>
            )}
            <div className={'flex flex-col'}>
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        className={`${currentCategory.toLowerCase() === category.slug.toLowerCase() ? 'font-bold' : ''} flex items-center gap-1`}
                        href={`/sklep/kategoria/${category.slug}`}
                    >
                        <span>{category.name}</span>
                        {category.products_count !== undefined && category.products_count !== null && (
                            <span className={'text-sm text-gray-400'}>({category.products_count})</span>
                        )}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default CategoryFilter;

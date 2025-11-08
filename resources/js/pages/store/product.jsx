import { usePage } from '@inertiajs/react';
import { Check, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { toast } from 'sonner';
import subpageHeader4 from '../../assets/images/subpage-header/subpage-header-4.jpg';
import EditorRenderer from '../../components/editor-renderer.jsx';
import ProductCard from '../../components/store/product/product-card.jsx';
import SizeChart from '../../components/store/product/size-chart.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import { Button } from '../../components/ui/button.js';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select.js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs.js';
import StoreLayout from '../../layouts/store-layout.jsx';
import { callToApi } from '../../utils/api/callToApi.js';
import getR2Url from '../../utils/getR2Url.js';
import addProductToCart from '../../utils/store/addProductToCart.js';

const Product = ({ product, similarProducts }) => {
    const { props } = usePage();
    const images = product.images
        .sort((a, b) => a.order - b.order)
        .map((image) => ({ original: getR2Url(image.filename), thumbnail: getR2Url(image.filename) }));

    const sizeVariants = product.variants && product.variants.length !== 0 ? product.variants?.filter((el) => el.name === 'rozmiar') : null;

    const [selectedVariant, setSelectedVariant] = useState(null);

    const addToCart = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();

        if (!selectedVariant && sizeVariants) {
            return toast.warning('Wybierz rozmiar aby dodać produkt.');
        }

        if (props.auth.user) {
            await callToApi({
                url: route('api.store.cart.add.products'),
                method: 'post',
                data: { product_id: id, quantity: 1, variant_id: selectedVariant },
            });
        } else {
            addProductToCart(id, 1, selectedVariant);
        }

        window.dispatchEvent(new Event('cartUpdated'));

        toast.success('Produkt został dodany do koszyka.');
    };

    return (
        <StoreLayout>
            <SubpageHeader
                title={product.name}
                background={subpageHeader4}
                text={'Praktyczne porady, nowinki i ekspercka wiedza ze świata podologii. Sprawdź nasze artykuły o zdrowiu stóp!'}
            />
            <SubpageLayoutContainer>
                <div className={'flex gap-10'}>
                    <div className={'w-14/32'}>
                        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
                    </div>
                    <div>
                        <h2 className={'text-dark-plum text-3xl font-bold'}>{product.name}</h2>
                        <p className={'mt-2 text-xl font-bold text-black'}>{product.price} zł</p>
                        {sizeVariants && (
                            <div className={'mt-2'}>
                                <p className={'text-dark-plum'}>Wybierz rozmiar</p>
                                <Select className={''} onValueChange={(value) => setSelectedVariant(value)}>
                                    <SelectTrigger className={'border-dark-plum text-dark-plum mt-2 w-[150px] border-1 bg-transparent'}>
                                        <SelectValue placeholder="Wybierz rozmiar" className={'text'} />
                                    </SelectTrigger>
                                    <SelectContent className={'bg-gray-50'}>
                                        {sizeVariants.map((el) => (
                                            <SelectItem className={'text-dark-plum'} value={el.id}>
                                                {el.value}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <SizeChart />
                            </div>
                        )}
                        <Button variant={'darkPlum'} className={'mt-10'} onClick={(e) => addToCart(e, product.id)}>
                            <ShoppingCart />
                            <span>Dodaj do koszyka</span>
                        </Button>
                        <div className={'flex- mt-3'}>
                            <p className={'flex text-green-600'}>
                                <Check /> Dostępne
                            </p>
                            <p className={'mt-2 text-black'}>Kategoria: {product.categories[0].name}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex w-full flex-col gap-6">
                    <Tabs defaultValue="description">
                        <TabsList>
                            <TabsTrigger value="description">Opis</TabsTrigger>
                            <TabsTrigger value="additional">Informacje dodatkowe</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className={'l'}>
                            <EditorRenderer blocks={JSON.parse(product.description)} />
                        </TabsContent>
                        <TabsContent value="additional">
                            <div>
                                {product.attributes.map((attribute, index) => (
                                    <div key={index}>
                                        {attribute.name} - {attribute.value}
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className={'grid grid-cols-4'}>
                    {similarProducts.map((similarProduct, index) => (
                        <React.Fragment key={index}>
                            <ProductCard product={similarProduct} />
                        </React.Fragment>
                    ))}
                </div>
            </SubpageLayoutContainer>
        </StoreLayout>
    );
};

export default Product;

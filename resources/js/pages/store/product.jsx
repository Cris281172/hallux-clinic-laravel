import { Check, ShoppingCart } from 'lucide-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import subpageHeader4 from '../../assets/images/subpage-header/subpage-header-4.jpg';
import EditorRenderer from '../../components/editor-renderer.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import { Button } from '../../components/ui/button.js';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select.js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs.js';
import StoreLayout from '../../layouts/store-layout.jsx';
import getR2Url from '../../utils/getR2Url.js';

const Product = ({ product }) => {
    console.log(product);
    const images = product.images
        .sort((a, b) => a.order - b.order)
        .map((image) => ({ original: getR2Url(image.filename), thumbnail: getR2Url(image.filename) }));

    const sizeVariants = product.variants?.filter((el) => el.name === 'rozmiar') ?? null;
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
                            <Select>
                                <SelectTrigger className={'bg-dark-plum mt-2 w-[150px]'}>
                                    <SelectValue placeholder="Wybierz rozmiar" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sizeVariants.map((el) => (
                                        <SelectItem value={el.value}>{el.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                        <Button variant={'darkPlum'} className={'mt-10'}>
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
                {/*subcontent*/}
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
            </SubpageLayoutContainer>
        </StoreLayout>
    );
};

export default Product;

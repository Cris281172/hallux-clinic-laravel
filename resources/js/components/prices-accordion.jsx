import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';

const PricesAccordion = ({ data, category, variant = 'default' }) => {
    return (
        <div className="relative flex flex-col gap-2 overflow-x-auto">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`${variant === 'default' ? 'text-dark-plum bg-gray-200' : 'bg-dark-plum'} flex flex-col items-center rounded-md pt-3 pb-3 sm:flex-row`}
                >
                    <Accordion
                        className={`w-full ${variant === 'default' ? 'border-dark-plum' : 'border-gray-200'} p-0 pt-1 pr-3 pb-1 pl-3 sm:w-7/8 sm:border-r-2`}
                        type="single"
                        collapsible
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{item.value}</AccordionTrigger>
                            <AccordionContent>
                                <p className={'mb-1'}>{item.shortDesc}</p>
                                <Link
                                    href={route(`service`, { category: category ? category : item.categoryLink, service: item.link })}
                                    className={'font-bold'}
                                >
                                    Poznaj szczegóły
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className={'flex w-full justify-start pl-3 sm:w-1/8 sm:justify-center sm:p-0'}>{item.price} zł</div>
                </div>
            ))}
        </div>
    );
};

export default PricesAccordion;

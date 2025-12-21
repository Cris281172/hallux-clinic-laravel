import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import { Button } from '../ui/button.tsx';

const ReviewsSection = () => {
    return (
        <section className={'bg-gray-100 pt-20 pb-20'}>
            <Container>
                <HeadingHome
                    title={'Opinie'}
                    text={
                        'Zaufanie naszych pacjentów to najlepsza rekomendacja. Sprawdź, co mówią osoby, które powierzyły nam swoje zdrowie i przekonaj się, że warto nam zaufać.'
                    }
                    titleClasName={'text-dark-plum'}
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-dark-plum mb-4 italic">
                            „Świetne podejście do pacjenta – z uśmiechem, cierpliwością i ogromną wiedzą. Pani Monika dokładnie wszystko wyjaśnia, a
                            efekty widać już przy pierwszej wizycie. Gabinet bardzo czysty i przyjazny. Serdecznie polecam Hallux Clinic!”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-bold">EP</div>
                            <div>
                                <p className="text-dark-plum font-semibold">Ewelina P.</p>
                                <p className="text-sm text-gray-500">Pacjentka</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-dark-plum mb-4 italic">
                            „Cudowna specjalistka z wielkim sercem. Z dużą dbałością podeszła do mocno zbitego paznokcia u reki u 6 letniego syna.
                            Wytłumaczyła co i jak trzeba robić sprawnie i bezboleśnie odbarczyła krwiak. Polecam i pozdrawiam”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-bold">MK</div>
                            <div>
                                <p className="text-dark-plum font-semibold">Mariusz K.</p>
                                <p className="text-sm text-gray-500">Pacjent</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-dark-plum mb-4 italic">
                            „Profesjonalne podejście do problemu i pacjenta. Pani Monika jest bardzo kompetentna, rzetelna i wspierająca. Ponadto to
                            bardzo sympatyczna i taktowna osoba. Domowa wizyta przebiegła w bardzo miłej atmosferze. Następne spotkanie już w
                            planach.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-bold">BL</div>
                            <div>
                                <p className="text-dark-plum font-semibold">Beata L.</p>
                                <p className="text-sm text-gray-500">Pacjentka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mt-10 flex justify-center'}>
                    <Button variant={'darkPlum'} asChild>
                        <a
                            href={
                                'https://www.google.it/maps/place/Gabinet+Podologiczny+-+Hallux+Clinic/@51.7470944,19.3919956,17z/data=!4m8!3m7!1s0xaa3c1637f752cc7d:0x987af35fe5957128!8m2!3d51.7470911!4d19.3945759!9m1!1b1!16s%2Fg%2F11vbdt5s5m?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D'
                            }
                            target={'_blank'}
                        >
                            Zobacz wszystkie opinie
                        </a>
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default ReviewsSection;

import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import selfPhoto from '../../assets/images/self-photo.webp';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import { Button } from '../ui/button.tsx';

const TeamSection = () => {
    return (
        <section className="bg-gray-200 py-16 sm:py-20">
            <Container>
                <section className="flex flex-col items-center text-center">
                    <HeadingHome
                        title="Poznaj nasz zespół"
                        text="Profesjonaliści w podologii, którzy łączą wiedzę, doświadczenie i pasję. Dbamy o zdrowie Twoich stóp z indywidualnym podejściem i najwyższymi standardami higieny."
                        titleClasName="text-dark-plum"
                    />
                </section>

                <section className="mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="mx-auto flex w-full flex-col items-center gap-6 rounded-xl bg-white/20 p-6 text-center shadow-lg backdrop-blur-xl lg:flex-row lg:gap-16 lg:p-10"
                    >
                        <motion.img
                            src={selfPhoto}
                            alt="Monika Juczyńska"
                            className="h-48 w-48 rounded-full object-cover lg:h-64 lg:w-64"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        />

                        <div className="hidden lg:block lg:h-64 lg:w-0.5 lg:bg-pink-600"></div>

                        <div className="flex-1 space-y-3 text-left text-black">
                            <h3 className="text-dark-plum text-xl font-bold lg:text-2xl">Monika Juczyńska</h3>
                            <p className="text-dark-plum lg:text-md mb-2 text-sm font-medium">Podolog</p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="lg:text-md space-y-2 text-sm"
                            >
                                <p>
                                    Podologia to dla mnie nie tylko zawód, lecz przede wszystkim prawdziwa pasja. Nieustannie rozwijam swoje
                                    umiejętności, uczestnicząc w licznych szkoleniach oraz prestiżowych kongresach podologicznych.
                                </p>
                                <p>
                                    Jako doświadczony specjalista prowadzący gabinet podologiczny w Łodzi, stawiam sobie za cel świadczenie usług na
                                    najwyższym poziomie – zarówno dla dorosłych, jak i dzieci.
                                </p>
                                <p>
                                    Szczególną troską otaczam seniorów, którzy z powodu chorób współistniejących lub ograniczeń zdrowotnych nie zawsze
                                    mogą dotrzeć do gabinetu. Dla nich oferuję mobilną wersję gabinetu.
                                </p>
                                <p>
                                    Bliska współpraca z cenionymi specjalistami z różnych dziedzin medycyny pozwala mi utrzymywać najwyższe standardy
                                    usług podologicznych, co potwierdzają liczne pozytywne opinie pacjentów. Gabinet podologiczny w Łodzi to miejsce,
                                    w którym pasja łączy się z profesjonalizmem, a troska o zdrowie Twoich stóp jest naszym najważniejszym
                                    zobowiązaniem.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                <section className="mt-6 flex justify-center">
                    <Button size="lg" variant="darkPlum" className="w-full max-w-xs" asChild>
                        <Link href={route('about-us')}>Zobacz pełny zespół</Link>
                    </Button>
                </section>
            </Container>
        </section>
    );
};

export default TeamSection;

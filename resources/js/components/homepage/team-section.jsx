import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import selfPhoto from '../../assets/images/self-photo.webp';
import magdaPhoto from '../../assets/images/magda-photo.webp';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import { Button } from '../ui/button.tsx';
import { useIsMobile } from '../../hooks/use-mobile.ts';

const TeamSection = () => {
    const isMobile = useIsMobile();

    const MotionDiv = isMobile ? 'div' : motion.div;
    const MotionImg = isMobile ? 'img' : motion.img;

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

                <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <MotionDiv

                        className="group flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:text-left lg:p-8"
                    >
                        <MotionImg
                            src={selfPhoto}
                            alt="Monika Juczyńska"
                            className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-44 sm:w-44"
                            {...(!isMobile && {
                                whileHover: { scale: 1.04 },
                                transition: { duration: 0.4 },
                            })}
                        />

                        <div className="mt-5 flex-1 sm:ml-7 sm:mt-0">
                            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-pink-600">
                                Podolog
                            </p>

                            <h3 className="text-xl font-bold text-dark-plum lg:text-2xl">
                                Monika Juczyńska
                            </h3>


                        </div>
                    </MotionDiv>

                    <MotionDiv

                        className="group flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:text-left lg:p-8"
                    >
                        <MotionImg
                            src={magdaPhoto}
                            alt="Magdalena Dziewanowska"
                            className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-44 sm:w-44"
                            {...(!isMobile && {
                                whileHover: { scale: 1.04 },
                                transition: { duration: 0.4 },
                            })}
                        />

                        <div className="mt-5 flex-1 sm:ml-7 sm:mt-0">
                            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-pink-600">
                                Podolog
                            </p>

                            <h3 className="text-xl font-bold text-dark-plum lg:text-2xl">
                                Magdalena Dziewanowska
                            </h3>


                        </div>
                    </MotionDiv>
                </section>


                <section className="mt-6 flex justify-center">
                    <Button size="lg" variant="darkPlum" className="w-full max-w-xs" asChild>
                        <Link href={route('about-us')}>Poznać zespół</Link>
                    </Button>
                </section>
            </Container>
        </section>
    );
};

export default TeamSection;

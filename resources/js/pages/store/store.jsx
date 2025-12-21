import { Link } from '@inertiajs/react';
import Container from '../../components/page/container.jsx';
import BestsellersSection from '../../components/store/home/bestsellers-section.jsx';
import CategoriesSection from '../../components/store/home/categories-section.jsx';
import ContactSection from '../../components/store/home/contact-section.jsx';
import CooperationCompanySection from '../../components/store/home/cooperation-company-section.jsx';
import FaqSection from '../../components/store/home/faq-section.jsx';
import HeroSection from '../../components/store/home/hero-section.jsx';
import OurProductsSection from '../../components/store/home/our-products-section.jsx';
import PodologyServicesSection from '../../components/store/home/podology-services-section.jsx';
import ReviewsSection from '../../components/store/home/reviews-section.jsx';
import SignupDiscountSection from '../../components/store/home/signup-discount-section.jsx';
import TipsNewsSection from '../../components/store/home/tips-news-section.jsx';
import WhyUsSection from '../../components/store/home/why-us-section.jsx';
import StoreLayout from '../../layouts/store-layout.jsx';

const Store = ({ productsBestseller }) => {
    return (
        <StoreLayout>
            <HeroSection />
            <CategoriesSection />
            <SignupDiscountSection />
            <BestsellersSection products={productsBestseller} />
            <WhyUsSection />
            <CooperationCompanySection />
            <OurProductsSection />
            <TipsNewsSection />
            <PodologyServicesSection />
            <ReviewsSection />
            <ContactSection />
            <FaqSection />
            <footer className="bg-dark-plum pt-16 pb-8 text-white">
                <Container>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
                        {/* Logo + opis */}
                        <div className="col-span-1 md:col-span-1">
                            <h2 className="mb-4 text-2xl font-bold">Hallux Clinic</h2>
                            <p className="text-gray-300">
                                Profesjonalne wkładki ortopedyczne i obuwie medyczne. Dbamy o zdrowie Twoich stóp i komfort codziennego życia.
                            </p>
                        </div>

                        {/* Linki do sklepu */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Sklep</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <Link href="/kategoria/wkladki" className="hover:text-pink-300">
                                        Wkładki ortopedyczne
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/kategoria/obuwie" className="hover:text-pink-300">
                                        Obuwie medyczne
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bestsellery" className="hover:text-pink-300">
                                        Bestsellery
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/nowosci" className="hover:text-pink-300">
                                        Nowości
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Dlaczego my / O nas */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Dlaczego my?</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>Indywidualne dopasowanie produktów</li>
                                <li>Wysoka jakość i certyfikowane materiały</li>
                                <li>Profesjonalna obsługa klienta</li>
                                <li>Szybka realizacja zamówień</li>
                            </ul>
                        </div>

                        {/* Kontakt */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Kontakt</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>ul. Przykładowa 12, 90-001 Łódź</li>
                                <li>
                                    <a href="tel:+48123456789" className="hover:text-pink-300">
                                        +48 123 456 789
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:kontakt@twojsklep.pl" className="hover:text-pink-300">
                                        kontakt@twojsklep.pl
                                    </a>
                                </li>
                                <li>Godziny: Pon-Pt 9:00-17:00, Sob 9:00-13:00</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Newsletter</h3>
                            <p className="mb-4 text-gray-300">Zapisz się i otrzymaj 5% rabatu na pierwsze zakupy!</p>
                            <form className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Twój e-mail"
                                    className="text-dark-plum w-full rounded-xl border border-gray-300 p-3 focus:border-pink-400 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="text-dark-plum rounded-xl bg-pink-400 py-3 font-semibold transition hover:bg-pink-500"
                                >
                                    Zapisz się
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social media */}
                    <div className="mt-10 flex justify-center gap-6">
                        <a href="#" className="text-gray-300 hover:text-pink-300">
                            Facebook
                        </a>
                        <a href="#" className="text-gray-300 hover:text-pink-300">
                            Instagram
                        </a>
                        <a href="#" className="text-gray-300 hover:text-pink-300">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-300 hover:text-pink-300">
                            YouTube
                        </a>
                    </div>

                    {/* Dolny pasek */}
                    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Hallux Clinic. Wszelkie prawa zastrzeżone.
                    </div>
                </Container>
            </footer>
        </StoreLayout>
    );
};

export default Store;

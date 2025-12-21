import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const ContactSection = () => {
    const { post } = useForm({
        message: 'dwadwa',
    });

    useEffect(() => {
        const channel = window.Echo.private('chat.13').listen('MessageSent', (e) => {
            console.log('Received message:', e);
        });

        return () => {
            channel.stopListening('MessageSent');
        };
    }, []);

    return (
        <div className="relative bg-pink-100 py-20">
            <Container>
                <SectionHeader
                    title={'Skontaktuj się z nami'}
                    text={'Masz pytania dotyczące produktów lub usług podologicznych? Skontaktuj się z nami — chętnie pomożemy!'}
                />
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div className="text-dark-plum flex flex-col justify-center space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold">Adres gabinetu</h3>
                            <p>ul. Przykładowa 12, 90-001 Łódź</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Telefon</h3>
                            <a href="tel:+48123456789" className="text-dark-plum underline hover:text-purple-700">
                                +48 123 456 789
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">E-mail</h3>
                            <a href="mailto:kontakt@twojsklep.pl" className="text-dark-plum underline hover:text-purple-700">
                                kontakt@twojsklep.pl
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold">Godziny otwarcia</h3>
                            <p>Poniedziałek – Piątek: 9:00 – 17:00</p>
                            <p>Sobota: 9:00 – 13:00</p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-md">
                        <h3 className="text-dark-plum mb-6 text-center text-2xl font-semibold">Napisz do nas</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Imię i nazwisko"
                                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Adres e-mail"
                                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
                            />
                            <textarea
                                placeholder="Twoja wiadomość..."
                                rows="4"
                                className="w-full rounded-xl border border-gray-300 p-3 focus:border-purple-500 focus:outline-none"
                            />
                            <button type="submit" className="bg-dark-plum w-full rounded-xl py-3 text-white transition hover:bg-purple-800">
                                Wyślij wiadomość
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactSection;

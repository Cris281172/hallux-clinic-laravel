import HeadingHome from '../heading-home.jsx';
import Map from '../map.jsx';
import { ContactSection as ContactForm } from '../page/contact-section.jsx';
import Container from '../page/container.jsx';

const ContactSection = () => {
    return (
        <section className={'bg-gray-200 pt-20'}>
            <Container>
                <HeadingHome
                    title={'Kontakt'}
                    titleClasName={'text-dark-plum'}
                    text={
                        'Masz pytania lub chcesz umówić wizytę? Skontaktuj się z nami telefonicznie, przez formularz lub odwiedź nasz gabinet w Łodzi. Jesteśmy tu, by pomóc Ci zadbać o zdrowie Twoich stóp.'
                    }
                />

                <div className={'relative top-[30px] z-15 rounded-2xl border-1 border-gray-300 bg-gray-100 p-5 shadow-2xl sm:p-10'}>
                    <ContactForm />
                </div>
            </Container>
            <Map />
        </section>
    );
};

export default ContactSection;

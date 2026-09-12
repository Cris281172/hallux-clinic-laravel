import ContactSection from '../components/homepage/contact-section.jsx';
import FaqSection from '../components/homepage/faq-section.jsx';
import HeroSection from '../components/homepage/hero-section.jsx';
import NaturopathySection from '../components/homepage/naturopathy-section.jsx';
import OfficeSection from '../components/homepage/office-section.jsx';
import PricingSection from '../components/homepage/pricing-section.jsx';
import ReviewsSection from '../components/homepage/reviews-section.jsx';
import TeamSection from '../components/homepage/team-section.jsx';
import TreatmentSection from '../components/homepage/treatment-section.jsx';
import WhyUsSection from '../components/homepage/why-us-section.jsx';
import SEO from '../components/page/SEO.jsx';
import AuthDialog from '../components/store/auth/auth-dialog.jsx';
import AppLayout from '../layouts/app-layout.jsx';

export default function Home() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'MedicalBusiness'],
        name: 'Hallux Clinic',
        url: 'https://hallux.clinic/',
        image: 'https://hallux.clinic/images/logo.webp',
        telephone: '+48 459 410 096',
        email: 'hallux.clinic@gmail.com',
        priceRange: '$$',
        hasMap: 'https://maps.app.goo.gl/AYsaeVkj7LU1nRSY6',
        sameAs: [
            'https://www.google.it/maps/place/Gabinet+Podologiczny+-+Hallux+Clinic/@51.7470944,19.3919956,17z/data=!4m8!3m7!1s0xaa3c1637f752cc7d:0x987af35fe5957128!8m2!3d51.7470911!4d19.3945759!9m1!1b1!16s%2Fg%2F11vbdt5s5m',
        ],
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 51.7470911,
            longitude: 19.3945759,
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Armii Krajowej 44/lok. U3',
            postalCode: '94-046',
            addressLocality: 'Łódź',
            addressCountry: 'PL',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '10:00',
                closes: '18:00',
            },
        ],
    };

    return (
        <AppLayout>
            <SEO
                title={'Gabinet Podologiczny Łódź - Profesjonalna Pielęgnacja Stóp'}
                description={
                    'Szukasz dobrego podologa w Łodzi na Retkini? Hallux Clinic oferuje diagnostykę i terapię problemów stóp: wrastające paznokcie, odciski i grzybicę. Umów wizytę!'
                }
                structuredData={structuredData}
            />
            <main>
                <HeroSection />
                <TreatmentSection />
                <PricingSection />
                <TeamSection />
                <NaturopathySection />
                <OfficeSection />
                <WhyUsSection />
                <ContactSection />
                <ReviewsSection />
                <FaqSection />
            </main>
            <AuthDialog />
        </AppLayout>
    );
}

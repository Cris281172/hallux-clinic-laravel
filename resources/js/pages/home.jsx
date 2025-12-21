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
    return (
        <AppLayout>
            <SEO
                title={'Gabinet Podologiczny Łódź - Profesjonalna Pielęgnacja Stóp'}
                description={
                    'Szukasz dobrego podologa w Łodzi? Hallux Clinic oferuje kompleksową diagnostykę i leczenie chorób stóp. Wrastające paznokcie, odciski, grzybica. Umów wizytę!'
                }
            />
            <main>
                <HeroSection />
                <TreatmentSection />
                {/*<ManicureSection />*/}
                <NaturopathySection />
                <TeamSection />
                <PricingSection />
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

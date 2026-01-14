import Header from '@/react-app/components/Header';
import HeroSection from '@/react-app/components/HeroSection';
import AboutSection from '@/react-app/components/AboutSection';
import TechnologiesSection from '@/react-app/components/TechnologiesSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import CasesSection from '@/react-app/components/CasesSection';
import AIComparisonSection from '@/react-app/components/AIComparisonSection';
import HowItWorksSection from '@/react-app/components/HowItWorksSection';
import TeamSection from '@/react-app/components/TeamSection';
import ContactSection from '@/react-app/components/ContactSection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ServicesSection />
      <HowItWorksSection />
      <CasesSection />
      <TeamSection />
      <AIComparisonSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

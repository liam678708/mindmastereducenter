import HeroSection from "@/components/HeroSection";
import NoticeSection from "@/components/NoticeSection";
import AboutSection from "@/components/AboutSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import AdmissionSection from "@/components/AdmissionSection";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import WhyUs from "@/components/WhyUs";
import GallerySection from "@/components/GallerySection";
import ContactSocial from "@/components/ContactSocial";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <NoticeSection />
        <AboutSection />
        <FeaturedPrograms />
        <AdmissionSection />
        <Programs />
        <Schedule />
        <WhyUs />
        <GallerySection />
        <ContactSocial />
      </main>
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import Services from "@/components/Services";
import PopularDestinations from "@/components/PopularDestinations";
import FleetShowcase from "@/components/FleetShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingForm />
      <Services />
      <PopularDestinations />
      <FleetShowcase />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

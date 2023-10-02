import AboutUs from "./sections/AboutUs";
import BookAppointment from "./sections/BookAppointment";
import ContactUsSection from "./sections/ContactUsSection";
import FaqSection from "./sections/FaqSection";
import HeroSection from "./sections/HeroSection";
import OurServices from "./sections/OurServices";
import OurTeam from "./sections/OurTeam";
import SpecialOffer from "./sections/SpecialOffer";
import Testimonials from "./sections/Testimonials";
import WashingAndCleaning from "./sections/WashingAndCleaning";
import WhyUsSection from "./sections/WhyUsSection";

function HomePage() {
  return (
    <div>
      HomePage
      <HeroSection />
      <BookAppointment />
      <AboutUs />
      <OurServices />
      <FaqSection />
      <WhyUsSection />
      <Testimonials />
      <OurTeam />
      <WashingAndCleaning />
      <SpecialOffer />
      <ContactUsSection />
    </div>
  );
}

export default HomePage;

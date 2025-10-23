import { useLocation } from 'react-router-dom';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import OurMessage from '../OurMessage/OurMessage';
import OurProjects from '../OurProjects/OurProjects';
import OurTeam from '../OurTeam/OurTeam';
import OurVision from '../OurVision/OurVision';
import OurWorks from '../OurWorks/OurWorks';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { scrollToSection } from '../../../features/helpers/ScrollToSection';
import { useEffect } from 'react';

const Home = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // Wait until sections are rendered, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 400);
    }
  }, [location]);
    return (
        <>
            <Header/>
            <About/>
            <Services/>
            <WhyChooseUs/>
            <OurWorks/>
            <OurProjects/>
            <OurVision/>
            <OurMessage/>
            <OurTeam/>
            <ContactUs/>
            <Partner/>
        </>
    );
}

export default Home;

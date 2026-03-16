import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from "./components/animations/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from './components/layout/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
import Contact from "./pages/Contact";
import ScrollToHashElement from "./components/animations/ScrollToHashElement";
import NotFound from "./pages/NotFound";
import Privacy from "./components/legal/Privacy";
import Terms from "./components/legal/Terms";
import CookiesPolicy from "./components/legal/Cookies";
import Refund from "./components/legal/Refund";
import GalleryPage from "./pages/GalleryPage";
import WhatsAppButton from "./components/ui/WhatsAppBtn";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, [])
  const location = useLocation();



  return (
    
    <div className="bg-background text-white duration-200">
      <ScrollToTop />
      <ScrollToHashElement />
      
      {/*<MouseCursor />*/}
      <Navbar />
      {/* {!isAdminPage && !isUserDashboard && !isNewUI && !isUserLogin && !isUserRegister && (
        <Navbar />
      )} */}

      <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryPage />} /> 
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />  
          <Route path="/services" element={<ServicesPage />} />  
          <Route path="*" element={<NotFound />} />

          {/* Legal routes */}
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cookie-policy" element={<CookiesPolicy />} />
        </Routes>
        {/* {!isAdminPage && !isNewUI && !isUserDashboard && !isUserLogin && !isUserRegister && <Footer />} */}
            {/*<ScrollToTop />*/}
      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default App;

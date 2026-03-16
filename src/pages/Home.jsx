import React, { useEffect, useState, useMemo } from 'react'
import Hero from '../components/sections/Hero'
import Testimonials from '../components/sections/Testimonials'
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../components/hooks/useScrollSpy";
import { Helmet } from 'react-helmet'

import SignatureServices from '../components/sections/OurServices';
import InspirationGallery from '../components/sections/GallerySection';
import WhyChooseUs from '../components/sections/AboutPremium';
import BookingCTA from '../components/sections/BookingCTA';
import BookingSection from '../components/sections/BookingSection';
import InstagramShowcase from '../components/sections/InstagramShow';
import FAQ from '../components/sections/FAQ';
import BeforeAfterSection from '../components/sections/BeforeAfter';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  return (
    <div>

      <Helmet>
        <title>PrimeCut | Premium Barbershop Website Template by GraceTech</title>
        <meta
          name="description"
          content="PrimeCut offers premium barber services including haircuts, beard grooming and luxury treatments."
        />
      
        <meta property="og:title" content="PrimeCut | Premium Barbershop Website" />
        <meta property="og:description" content="Modern React + Tailwind barbershop UI template." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
      </Helmet>
      <main>
        <Hero />

        <SignatureServices /> 

        <BeforeAfterSection />

        <InspirationGallery />

        <WhyChooseUs />

        <Testimonials />

        <FAQ />

        <BookingCTA />

        <InstagramShowcase />

        
      </main>

    </div>
  )
}

export default Home

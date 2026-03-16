import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BgImg from '../../assets/gallery/bgImage.jpeg'
import HeroImg from '../../assets/hero/HeroImage.avif'
import { useState } from "react";

// Simple reusable Button component
export function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-primary text-black hover:bg-[#c19b2e]",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-black",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


// Premium Hero Section
export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative bg-dark text-white py-24 overflow-hidden lg:mt-[-30px]"
    >
      {/* Luxury Gold Glow */}
      <div className="absolute right-[-200px] top-[-200px] w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full"></div>
      <div className="absolute left-[-200px] bottom-[-200px] w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

      {/* MOBILE IMAGE COLLAGE */}
      <div className="grid grid-cols-2 gap-4 lg:hidden mb-10">

      <motion.img
            style={{ y: y1 }}
     
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600"
          className="rounded-xl h-40 w-full object-cover"
        />

<motion.img
            style={{ y: y1 }}
     
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600"
          className="rounded-xl h-32 w-full object-cover"
        />

<motion.img
            style={{ y: y1 }}
     
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
          className="rounded-xl h-32 w-full object-cover"
        />

<motion.img
            style={{ y: y1 }}
     
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600"
          className="rounded-xl h-40 w-full object-cover"
        />

      </div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="text-primary tracking-[0.4em] uppercase text-sm">
            Luxury Hair Studio
          </span>

          <h1 className="text-4xl lg:text-7xl font-serif leading-tight mt-4">
            Discover Your
            <br />
            Signature
            <span className="text-primary"> Hairstyle</span>
          </h1>

          <p className="mt-5 text-gray-400 text-sm lg:text-lg max-w-lg">
            Premium braids, luxury wigs, silk press and flawless styles
            crafted by professional hairstylists.
          </p>

          <button className="mt-7 px-7 py-3 border border-primary/40 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition">
            Book Appointment
          </button>

          {/* Floating Style Labels */}
          <div className="flex flex-wrap gap-3 mt-7 text-xs lg:text-sm">
            <span className="px-4 py-1 border border-primary rounded-full text-white">
              Box Braids
            </span>
            <span className="px-4 py-1 border border-primary rounded-full text-white">
              Silk Press
            </span>
            <span className="px-4 py-1 border border-primary rounded-full text-white">
              Luxury Wigs
            </span>
            <span className="px-4 py-1 border border-primary rounded-full text-white">
              Boho Braids
            </span>
          </div>
        </motion.div>

        {/* DESKTOP IMAGE GALLERY */}
        <div className="hidden lg:grid grid-cols-2 gap-6">

          <motion.img
            style={{ y: y1 }}
     
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}

            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600"
            className="rounded-2xl object-cover h-56 w-full shadow-xl hover:scale-105 transition mt-10"
          />

          <motion.img
            style={{ y: y2 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600"
            className="rounded-2xl object-cover h-72 w-full shadow-xl hover:scale-105 transition mt-10"
          />

          <motion.img
            style={{ y: y3 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
            className="rounded-2xl object-cover h-72 w-full shadow-xl hover:scale-105 transition"
          />

          <motion.img
            style={{ y: y4 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600"
            className="rounded-2xl object-cover h-56 w-full shadow-xl hover:scale-105 transition"
          />

        </div>

      </div>

      {/* Curved Luxury Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F6F1"
            d="M0,80 C360,20 1080,20 1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
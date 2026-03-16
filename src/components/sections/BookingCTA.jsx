import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Users, Award } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Glow */}
      <div className="absolute left-[-200px] top-[120px] w-[450px] h-[450px] bg-primary/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

        <span className="text-primary tracking-[0.35em] uppercase text-sm">
          Book Your Appointment
        </span>

        <h2 className="text-4xl lg:text-6xl font-serif mt-6 leading-tight">
          Ready For Your
          <br />
          <span className="text-primary">Luxury Hair Experience?</span>
        </h2>

        <p className="text-gray-300 mt-6 max-w-xl mx-auto">
          Book your appointment today and let our expert stylists
          create a hairstyle that enhances your beauty and confidence.
        </p>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link to="/booking">
            <button className="px-10 py-4 bg-primary hover:bg-primary-hover rounded-full font-semibold transition hover:scale-105">
              Book Appointment
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-10 py-4 border border-white/40 hover:border-primary rounded-full transition">
              Contact Us
            </button>
          </Link>

        </div>

        {/* Trust Indicators */}

        <div className="flex flex-wrap justify-center gap-10 mt-12 text-gray-300 text-sm">

          <div className="flex items-center gap-2">
            <Star className="text-primary" size={18}/>
            <span>4.9 Client Rating</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="text-primary" size={18}/>
            <span>500+ Happy Clients</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="text-primary" size={18}/>
            <span>Luxury Salon Experience</span>
          </div>

        </div>

      </div>
    </section>
  );
}
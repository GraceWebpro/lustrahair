import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function BookingPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Soft pink glow */}

      <div className="absolute left-[-200px] top-[150px] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full"></div>

      {/* CONTENT */}

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 lg:gap-16 items-center py-32">

        {/* LEFT TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left mx-auto lg:mx-0"
        >

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Book Appointment
          </span>

          <h1 className="text-4xl lg:text-5xl font-serif text-white mt-4 leading-tight">
            Reserve Your <br/> Luxury Hair Experience
          </h1>

          <p className="text-gray-300 mt-6 max-w-md mx-auto lg:mx-0">
            Book your appointment with LustraHair and enjoy
            professional styling, premium products and a relaxing
            salon experience designed just for you.
          </p>

          {/* Contact info */}

          <div className="mt-10 space-y-4 text-gray-300">

          <div className="flex items-center justify-center lg:justify-start gap-3">              <Phone size={18} className="text-primary"/>
              <span>+234 800 000 0000</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">              <Clock size={18} className="text-primary"/>
              <span>Mon - Sat : 9:00AM - 7:00PM</span>
            </div>

          </div>

        </motion.div>

        {/* BOOKING FORM */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-2xl font-semibold text-white mb-6">
            Book Appointment
          </h2>

          <form className="space-y-5">

            {/* Name */}

            <div className="relative">
              <User className="absolute left-4 top-3 text-gray-400" size={18}/>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Phone */}

            <div className="relative">
              <Phone className="absolute left-4 top-3 text-gray-400" size={18}/>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Service */}

            <select className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:border-primary">

              <option>Select Service</option>
              <option>Braids</option>
              <option>Silk Press</option>
              <option>Wigs Installation</option>
              <option>Cornrows</option>

            </select>

            {/* Date */}

            <div className="relative">
              <Calendar className="absolute left-4 top-3 text-gray-400" size={18}/>
              <input
                type="date"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Time */}

            <div className="relative">
              <Clock className="absolute left-4 top-3 text-gray-400" size={18}/>
              <input
                type="time"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Submit */}

            <button
              className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition"
            >
              Confirm Booking
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from '../data/services'


export default function ServicesPage() {
  return (
    <section className="bg-dark text-white">

      {/* HERO */}

      <div className="relative h-[60vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Our Services
          </span>

          <h1 className="text-4xl lg:text-6xl font-serif mt-4">
            Luxury Hairstyling Services
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl mx-auto">
            Discover our premium hairstyling services designed to
            enhance your beauty and confidence.
          </p>

        </div>

      </div>

      {/* SERVICES GRID */}

      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur hover:bg-white/10 transition"
            >

              <img
                src={service.image}
                className="h-[260px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {service.desc}
                </p>

                <p className="text-primary mt-4 font-medium">
                  {service.price}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          *Final price may vary depending on hair length and styling complexity.
        </p>

      </div>

      {/* PROCESS */}

      <div className="bg-black py-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <span className="text-primary tracking-[0.35em] uppercase text-sm">
              Our Process
            </span>

            <h2 className="text-4xl font-serif mt-4">
              Your Luxury Salon Experience
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16 text-center">

            <div>
              <h3 className="text-xl font-semibold">Consultation</h3>
              <p className="text-gray-400 mt-3">
                We begin with a personalized consultation to
                understand your desired hairstyle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Styling</h3>
              <p className="text-gray-400 mt-3">
                Our expert stylists craft your hairstyle using
                professional techniques and premium products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Finishing Touch</h3>
              <p className="text-gray-400 mt-3">
                We perfect every detail to ensure you leave
                feeling confident and beautiful.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* BOOKING CTA */}

      <div className="py-24 text-center bg-gradient-to-r from-primary/20 to-primary/5">

        <h2 className="text-3xl font-serif">
          Ready For Your Next Look?
        </h2>

        <p className="text-gray-400 mt-4">
          Book your appointment today and enjoy a luxury
          hairstyling experience.
        </p>

        <Link
          to="/booking"
          className="inline-block mt-8 px-8 py-3 bg-primary rounded-full hover:scale-105 transition"
        >
          Book Appointment
        </Link>

      </div>

    </section>
  );
}
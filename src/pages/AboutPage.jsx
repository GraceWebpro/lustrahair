import { motion } from "framer-motion";

export default function AboutPage() {
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
            About LustraHair
          </span>

          <h1 className="text-4xl lg:text-6xl font-serif mt-4">
            Where Beauty Meets <br/> Luxury Styling
          </h1>

        </div>

      </div>

      {/* STORY */}

      <div className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

        <motion.img
          initial={{opacity:0, x:-40}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8}}
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900"
          className="rounded-2xl shadow-2xl"
        />

        <motion.div
          initial={{opacity:0, x:40}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8}}
        >

          <h2 className="text-3xl font-serif">
            Our Story
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            LustraHair was created with one mission — to combine
            creativity, elegance and professional hairstyling into
            an unforgettable salon experience. Our stylists bring
            years of expertise in braiding, natural hair styling,
            silk presses and luxury wig installations.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Every client deserves to feel confident and beautiful.
            That’s why we focus on personalized consultations,
            premium products and meticulous attention to detail.
          </p>

        </motion.div>

      </div>

      {/* STATS */}

      <div className="bg-black py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">

          <div>
            <h3 className="text-4xl font-semibold text-primary">10+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-primary">3k+</h3>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-primary">50+</h3>
            <p className="text-gray-400 mt-2">Hairstyle Variations</p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-primary">4.9★</h3>
            <p className="text-gray-400 mt-2">Client Rating</p>
          </div>

        </div>

      </div>

      {/* TEAM */}

      <div className="max-w-6xl mx-auto px-6 py-28">

        <div className="text-center">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Our Stylists
          </span>

          <h2 className="text-4xl font-serif mt-4">
            Meet The Experts
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {[
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
            "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600"
          ].map((img,i)=>(
            <motion.div
              key={i}
              whileHover={{scale:1.05}}
              className="text-center"
            >

              <img
                src={img}
                className="rounded-2xl w-full h-[320px] object-cover"
              />

              <h3 className="mt-4 font-semibold">
                Stylist Name
              </h3>

              <p className="text-gray-400 text-sm">
                Senior Hair Stylist
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* CTA */}

      <div className="bg-gradient-to-r from-primary/20 to-primary/5 py-24 text-center">

        <h2 className="text-3xl font-serif">
          Ready For Your Next Look?
        </h2>

        <p className="text-gray-400 mt-4">
          Book your appointment today and experience
          the luxury of professional hairstyling.
        </p>

        <a
          href="/booking"
          className="inline-block mt-8 px-8 py-3 bg-primary rounded-full hover:scale-105 transition"
        >
          Book Appointment
        </a>

      </div>

    </section>
  );
}
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../../data/gallery";

export default function InspirationGallery() {
  const [selected, setSelected] = useState(null);

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -60]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const y3 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative bg-dark py-28 overflow-hidden">

      {/* Soft Pink Glow */}
      <div className="absolute right-[-200px] top-[100px] w-[450px] h-[450px] bg-primary/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Hair Inspiration
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif mt-4 text-white/80">
            Discover Your Next Look
          </h2>

          <p className="text-gray-400 mt-4">
            Explore our collection of elegant hairstyles crafted
            for beauty, confidence and individuality.
          </p>

        </div>

        {/* MASONRY GRID */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {/* Large Image */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative group overflow-hidden rounded-2xl md:row-span-2"
            onClick={() => setSelected(styles[0].image)}
          >
            <img
              src={styles[0].image}
              className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{styles[0].label}</h3>
            </div>

            {/* hover label */}
            <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition">
                <span className="text-sm tracking-wide">
                  View Style →
                </span>
              </div>
          </motion.div>

          {/* Standard Images */}
          {styles.slice(1, 6).map((style, i) => {
            const motionY =
            i % 3 === 0 ? y1 : i % 3 === 1 ? y2 : y3;
            return (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => setSelected(style.image)}              
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={style.image}
                className="h-[260px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">{style.label}</h3>
              </div>

              {/* hover label */}
              <div className="absolute bottom-4 right-4 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                  View →
                </div>
            </motion.div>
          )})}

        </div>

        {/* CTA */}

        <div className="text-center mt-16">
          <Link to="/gallery">
          <button className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition hover:scale-105">
            View Full Gallery
          </button>
          </Link>
        </div>

      </div>

      {/* LIGHTBOX */}

      {selected && (

      <div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
        onClick={() => setSelected(null)}
      >

        <img
          src={selected}
          className="max-h-[90vh] rounded-xl shadow-2xl"
        />

      </div>

      )}
    </section>
  );
}
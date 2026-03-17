import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useState } from "react";
import insta3 from '../../assets/hero/gal3.jpeg'
import insta1 from '../../assets/gallery/gal8.jpeg'
import insta2 from '../../assets/gallery/gal11.jpeg'
import insta4 from '../../assets/gallery/gal10.jpeg'
import insta5 from '../../assets/gallery/silk2.jpeg'
import insta6 from '../../assets/gallery/corn4.jpeg'

const posts = [
  insta1,
  insta3,
  insta2,
  insta4,
  insta5,
  insta6
];

export default function InstagramShowcase() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-background py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-2xl mx-auto">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Instagram
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif mt-4 text-white/80">
            Follow Our Work
          </h2>

          <p className="text-gray-400 mt-4">
            Discover our latest hairstyles, transformations and beauty inspiration.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

          {posts.map((img, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelected(img)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer 
              ${i === 1 ? "md:row-span-2 h-[540px]" : "h-[260px]"}`}
            >

              <img
                src={img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex flex-col items-center justify-center">

                <Instagram
                  className="text-white opacity-0 group-hover:opacity-100 transition"
                  size={30}
                />

                <span className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100">
                  @lustrahair
                </span>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Follow CTA */}

        <div className="text-center mt-16">

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition hover:scale-105"
          >
            <Instagram size={18}/>
            Follow @lustrahair
          </a>

        </div>

      </div>

      {/* Lightbox */}

      {selected && (

        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
        >

          <img
            src={selected}
            className="max-h-[90vh] rounded-xl"
          />

        </div>

      )}

    </section>
  );
}
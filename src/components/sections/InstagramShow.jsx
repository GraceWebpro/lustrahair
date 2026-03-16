import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useState } from "react";

const posts = [
  "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=900",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900",
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900",
  "https://images.unsplash.com/photo-1594824388853-2b3f3f37f72d?w=900"
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
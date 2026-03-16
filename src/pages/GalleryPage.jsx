import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=900", category: "Braids" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900", category: "Silk Press" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900", category: "Wigs" },
  { src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900", category: "Braids" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900", category: "Cornrows" },
  { src: "https://images.unsplash.com/photo-1594824388853-2b3f3f37f72d?w=900", category: "Natural" }
];

const filters = ["All", "Braids", "Wigs", "Silk Press", "Cornrows", "Natural"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  const totalPages = Math.ceil(filtered.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = filtered.slice(startIndex, startIndex + imagesPerPage);

  return (
    <section className="relative bg-dark py-32 overflow-hidden">

      {/* Soft pink glow */}
      <div className="absolute left-[-200px] top-[100px] w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Our Work
          </span>

          <h1 className="text-5xl font-serif mt-4 text-white/80">
            Hairstyle Gallery
          </h1>

          <p className="text-gray-400 mt-4">
            Explore our collection of luxury hairstyles crafted with
            creativity, precision and elegance.
          </p>

        </div>

        {/* FILTERS */}

        <div className="flex flex-wrap justify-center gap-3 mt-12">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => {
                setActive(filter);
                setCurrentPage(1);
              }}              
              className={`px-5 py-2 rounded-full text-sm border transition
              ${
                active === filter
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* MASONRY GRID */}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16 space-y-6">

          {currentImages.map((img, i) => (

            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                delay: i * 0.05,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => setSelected(img.src)}              
              className="relative group overflow-hidden rounded-2xl"
            >

              <img
                src={img.src}
                className="w-full object-cover rounded-2xl group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>

              {/* hover label */}
              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition">
                <span className="text-sm tracking-wide">
                  View Style →
                </span>
              </div>

            </motion.div>

          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-20">

          {/* PREV */}

          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                currentPage === 1
                  ? "bg-white/10 text-gray-500 opacity-40 pointer-events-none"
                  : "bg-white/10 text-white hover:bg-primary"
              }`}
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}

          {Array.from({ length: totalPages }, (_, i) => (

            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`w-10 h-10 rounded-full text-sm transition
              ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-white/10 text-white hover:bg-primary"
              }`}
            >
              {i + 1}
            </button>

          ))}

          {/* NEXT */}

          <button
            onClick={() => {
              setCurrentPage((p) => Math.min(p + 1, totalPages));
                window.scrollTo({ top: 0, behavior: "smooth" });

            }}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                currentPage === totalPages
                  ? "bg-white/10 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-primary"
              }`}
          >
            Next
          </button>

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
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const transformations = [
  {
    before:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900",
    after:
      "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=900",
  },
  {
    before:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900",
    after:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900",
  },
  {
    before:
      "https://images.unsplash.com/photo-1594824388853-2b3f3f37f72d?w=900",
    after:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900",
  },
];

function BeforeAfterCard({ before, after }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative h-[420px] w-full overflow-hidden rounded-3xl group cursor-col-resize"
    >
      {/* AFTER IMAGE */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE IMAGE */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          className="w-full h-full object-cover"
        />
      </div>

      {/* DIVIDER LINE */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-primary to-white"
        style={{ left: `${position}%` }}
      />

      {/* SLIDER KNOB */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${position}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl border border-white/40 backdrop-blur">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>

      {/* LABELS */}

      <div className="absolute top-5 left-5 px-3 py-1 text-xs bg-black/60 backdrop-blur text-white rounded-full">
        Before
      </div>

      <div className="absolute top-5 right-5 px-3 py-1 text-xs bg-black/60 backdrop-blur text-white rounded-full">
        After
      </div>

      {/* HOVER GLOW */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="relative bg-dark py-32 overflow-hidden">

      {/* Luxury Glow */}

      <div className="absolute left-[-200px] top-[200px] w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center max-w-2xl mx-auto">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Transformations
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif text-white mt-4">
            Before & After Results
          </h2>

          <p className="text-gray-400 mt-4">
            Drag the slider to reveal stunning hair transformations
            created by our professional stylists.
          </p>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {transformations.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >

              <BeforeAfterCard
                before={item.before}
                after={item.after}
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
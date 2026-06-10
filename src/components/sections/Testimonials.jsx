import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative bg-dark text-white py-32 overflow-hidden">

      {/* glow */}
      <div className="absolute right-[-200px] top-[120px] w-[500px] h-[500px] bg-primary/20 blur-[160px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* heading */}

        <span className="text-primary tracking-[0.35em] uppercase text-sm">
          Testimonials
        </span>

        <h2 className="text-4xl lg:text-5xl font-serif mt-4">
          What Our Clients Say
        </h2>

        {/* card */}

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur rounded-2xl p-10 mt-16 border border-white/10"
        >

          {/* quote icon */}

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary text-5xl">
            “
          </div>

          {/* stars */}

          <div className="flex justify-center gap-1 mb-6">

            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-primary fill-primary"/>
            ))}

          </div>

          {/* review */}

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t.review}
          </p>

          {/* client */}

          <div className="flex flex-col items-center mt-10">

            <img
              src={t.image}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />

            <h4 className="mt-4 font-semibold">
              {t.name}
            </h4>

            <span className="text-gray-400 text-sm">
              {t.role}
            </span>

          </div>

        </motion.div>

        {/* navigation */}

        <div className="flex justify-center gap-4 mt-10">

          <button
            onClick={prev}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-primary transition"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-primary transition"
          >
            Next
          </button>

        </div>

        {/* avatar navigation */}

        <div className="flex justify-center gap-4 mt-10">

          {testimonials.map((item, i) => (

            <img
              key={i}
              src={item.image}
              onClick={() => setIndex(i)}
              className={`w-10 h-10 rounded-full cursor-pointer border-2 transition
              ${
                index === i
                  ? "border-primary scale-110"
                  : "border-transparent opacity-60"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
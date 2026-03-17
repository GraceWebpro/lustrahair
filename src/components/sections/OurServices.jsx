import { motion } from "framer-motion";
import { services } from "../../data/services";


export default function SignatureServices() {
  return (
    <section className="bg-background py-28 mt-[-40px]">

      <div className="max-w-7xl mx-auto px-6">

      <div className="absolute left-[-200px] top-[100px] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full"></div>

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="text-primary tracking-[0.35em] uppercase text-sm">
            Our Expertise
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif mt-4 text-white/80">
            Signature Services
          </h2>

          <p className="text-gray-500 mt-4">
            Premium hairstyling services crafted to bring out
            your elegance, confidence and beauty.
          </p>

        </div>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"            
            >

              {/* IMAGE */}
              <img
                src={service.image}
                className="h-[340px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white">

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-300 mt-2">
                  {service.desc}
                </p>

                <span className="text-xs mt-3 inline-block text-primary opacity-0 group-hover:opacity-100 transition">
                  View Style →
                </span>

                <div className="w-12 h-[2px] bg-primary mt-4 shadow-[0_0_10px_rgba(232,74,138,0.6)]"></div>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
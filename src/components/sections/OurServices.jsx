import { motion } from "framer-motion";

const services = [
  {
    title: "Box Braids",
    image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800",
    desc: "Timeless protective braids styled with precision and elegance."
  },
  {
    title: "Silk Press",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    desc: "Smooth, glossy straight hair with a luxury salon finish."
  },
  {
    title: "Luxury Wig Install",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    desc: "Flawless wig installations designed for a natural look."
  },
  {
    title: "Boho Braids",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800",
    desc: "Soft, effortless bohemian braids with a modern twist."
  },
  {
    title: "Cornrows",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    desc: "Classic cornrow patterns styled with artistry and care."
  },
  {
    title: "Natural Hair Styling",
    image: "https://images.unsplash.com/photo-1594824388853-2b3f3f37f72d?w=800",
    desc: "Enhancing your natural beauty with expert styling."
  }
];

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
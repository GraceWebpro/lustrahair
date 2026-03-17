import { motion } from "framer-motion";
import aboutImg from '../../assets/about/salon1.png'
import { features } from "../../utils/constants";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-background py-32 overflow-hidden">

      {/* Luxury background glow */}
      <div className="absolute left-[-200px] top-[120px] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>


{/* HEADER */}
<div className="text-center max-w-2xl mx-auto">

<span className="text-primary tracking-[0.35em] uppercase text-sm">
Why Choose Us
</span>

<h2 className="text-4xl lg:text-5xl font-serif mt-4 text-white/80">
The LustraHair Experience
</h2>

<p className="text-gray-400 mt-4">
At LustraHair we combine professional expertise,
    premium products and artistic creativity to deliver
    hairstyles that make you feel confident and beautiful.
</p>

</div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

       

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >

          

          {/* Luxury image */}

          <div className="mt-10">

            <img
              src={aboutImg}
              className="rounded-2xl shadow-2xl"
            />

          </div>

        </motion.div>


        {/* RIGHT FEATURES GRID */}

        <div className="grid grid-cols-2 gap-6">

          {features.map((feature, i) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur hover:bg-white/10 transition"              >

                {/* icon */}

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition">

                  <Icon size={24} />

                </div>

                {/* title */}

                <h3 className="mt-5 font-semibold text-white/90">
                  {feature.title}
                </h3>

                {/* description */}

                <p className="text-sm text-gray-500 mt-2">
                  {feature.desc}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
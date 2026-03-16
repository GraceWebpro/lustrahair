import { useState } from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    q: "How long does a silk press last?",
    a: "A silk press typically lasts between 2 to 3 weeks depending on hair type, maintenance and humidity."
  },
  {
    q: "Should I wash my hair before my appointment?",
    a: "For most services we recommend arriving with clean hair, but our stylists can also provide a wash if needed."
  },
  {
    q: "How long do braids usually take?",
    a: "Depending on the style and length, braids can take anywhere from 3 to 6 hours."
  },
  {
    q: "What hair products do you use?",
    a: "We use premium professional salon products that maintain healthy hair while delivering beautiful results."
  },
  {
    q: "How do I book an appointment?",
    a: "You can book directly through our online booking page or contact us for assistance."
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto bg-background px-6 py-20 mt-10">

      <Helmet>
        <meta
          name="description"
          content="Frequently asked questions about the QuickBite food ordering template."
        />
      </Helmet>
      <div className="text-center">

      <span className="text-primary tracking-[0.35em] uppercase text-sm">
        FAQ
      </span>

      <h2 className="text-4xl lg:text-5xl font-serif mt-6 text-white">
        Frequently Asked Questions
      </h2>

      </div>

      <div className="space-y-4 mt-16">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border dark:border-white/20 rounded-xl p-5 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-lg">
                {faq.q}
              </h3>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>

            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-500">
                {faq.a}
              </p>
            )}

          </div>
        ))}

      </div>

      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4">
            Still have questions?
        </p>

        <a
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-xl"
        >
            Contact Us
        </a>
        </div>
    </div>
  );
};

export default FAQ;
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: "What are the membership plans?",
    answer: "We offer three straight-forward plans: Basic (₹999/mo), Premium (₹1,999/mo), and Elite (₹3,499/mo). Premium is our most popular package and includes group classes plus one personal training session a month."
  },
  {
    question: "Do you provide personal training?",
    answer: "Yes, we have a roster of expert coaches specializing in weight loss, muscle gain, and strength conditioning. You can book one-on-one sessions tailored specifically to your goals."
  },
  {
    question: "Is this gym suitable for beginners?",
    answer: "Absolutely. We pride ourselves on creating an unintimidating environment. Our Premium and Elite plans include fitness assessments and guidance to help you build a safe foundation."
  },
  {
    question: "What are the gym timings?",
    answer: "We are open Monday to Saturday from 5:30 AM to 11:00 PM, and Sundays from 7:00 AM to 2:00 PM, allowing flexibility for both students and working professionals."
  },
  {
    question: "How can I book a trial session?",
    answer: "You can book a trial session by filling out the contact form below, reaching out to us on WhatsApp, or visiting the gym directly at Gayatri Mall, Ratlam."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Questions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Frequently Asked <span className="text-red-600">Answers</span>
          </motion.h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border-t-2 border-t-transparent hover:border-t-red-500 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-white hover:text-red-500 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-neutral-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

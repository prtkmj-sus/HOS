import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Rohan Deshmukh',
    text: 'House Of Strength completely changed my approach to fitness. The trainers are incredibly supportive and focus on form before weight. I lost 15kg in 6 months!',
    rating: 5,
    tag: 'Weight Loss'
  },
  {
    name: 'Priya Patel',
    text: 'As a beginner, I was intimidated by gym environments. The staff here made me feel welcome immediately. Clean facility and top-tier equipment.',
    rating: 5,
    tag: 'Beginner'
  },
  {
    name: 'Aditya Singh',
    text: 'Best gym in Ratlam, hands down. If you want serious muscle gain, head coach Vikram is the guy you want holding you accountable.',
    rating: 5,
    tag: 'Muscle Gain'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-950 relative overflow-hidden">
      
      {/* Decorative large quote */}
      <div className="absolute top-10 left-10 text-neutral-900 opacity-50 z-0">
        <Quote className="w-64 h-64" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Real Results
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Member <span className="text-red-600">Stories</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-8 flex flex-col border-t-4 border-t-transparent hover:border-t-red-500 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              
              <p className="text-neutral-300 text-lg leading-relaxed flex-1 italic mb-8">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
                <span className="font-bold text-white">{review.name}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-2 py-1 rounded">
                  {review.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

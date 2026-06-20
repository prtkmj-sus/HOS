import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';

function Counter({ end, suffix = '', label }: { end: number, suffix?: string, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-red-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-neutral-400 font-medium text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hidden md:block">
              <div className="font-display font-bold text-7xl text-white mb-2">10+</div>
              <div className="text-neutral-400 font-medium text-sm uppercase tracking-wider">Years of<br/>Experience</div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6 leading-tight">
                More Than a Gym.<br/>A House of <span className="text-red-600">Discipline</span>.
              </h3>
              <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                At House Of Strength Gym in Ratlam, we believe that fitness is built on discipline, sweat, and consistency. We don't just offer equipment; we provide the foundation bridging the gap between who you are and who you want to be.
              </p>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                Whether you're looking to shed weight, pack on serious muscle, or find a community that holds you accountable through structured personal guidance, our doors are open. Transform your life, build unwavering confidence, and discover your true potential.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800"
            >
              <Counter end={1500} suffix="+" label="Members" />
              <Counter end={500} suffix="+" label="Transformations" />
              <Counter end={50} suffix="+" label="Weekly Workouts" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

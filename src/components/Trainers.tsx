import { motion } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';

const TRAINERS = [
  {
    name: 'Vikram Singh',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop',
    experience: '8+ Years',
    specialties: ['Powerlifting', 'Muscle Hypertrophy'],
    bio: 'Vikram specializes in building raw strength and structured muscle mass. His disciplined approach transforms beginners into athletes.',
  },
  {
    name: 'Anjali Sharma',
    role: 'Fat Loss & Conditioning Expert',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1974&auto=format&fit=crop',
    experience: '5+ Years',
    specialties: ['HIIT', 'Fat Loss', 'Mobility'],
    bio: 'Anjali brings high energy to every session. She focuses on metabolic conditioning and helping clients achieve their ideal body weight sustainably.',
  },
  {
    name: 'Rahul Verma',
    role: 'Personal Fitness Coach',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1974&auto=format&fit=crop',
    experience: '6+ Years',
    specialties: ['Body Recomposition', 'Nutrition'],
    bio: 'Rahul combines strict nutritional guidance with targeted training to help you change your body composition entirely.',
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Expert Coaches
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Meet Your <span className="text-red-600">Trainers</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass overflow-hidden group border-t-4 border-t-transparent hover:border-t-red-500 transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{trainer.name}</h4>
                    <p className="text-red-500 font-medium text-sm">{trainer.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-red-600 transition-colors text-white">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-red-600 transition-colors text-white">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Exp:</span>
                  <span className="text-sm font-semibold text-white bg-neutral-800 px-2 py-1 rounded">{trainer.experience}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {trainer.specialties.map(spec => (
                    <span key={spec} className="text-xs font-medium text-neutral-300 bg-neutral-800/50 border border-neutral-700 px-2 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

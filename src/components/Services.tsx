import { motion } from 'motion/react';
import { Flame, Dumbbell, UserCheck, Activity, HeartPulse, Shield, BicepsFlexed } from 'lucide-react';

const SERVICES = [
  {
    icon: Flame,
    title: 'Weight Loss Training',
    description: 'High-intensity programs designed to burn calories and shed pounds effectively.',
  },
  {
    icon: Dumbbell,
    title: 'Muscle Gain Programs',
    description: 'Hypertrophy-focused routines to build lean muscle mass and serious strength.',
  },
  {
    icon: UserCheck,
    title: 'Personal Training',
    description: 'Expert guidance tailored to your specific fitness goals and body type.',
  },
  {
    icon: BicepsFlexed,
    title: 'Strength Training',
    description: 'Powerlifting and foundational strength exercises to increase your raw power.',
  },
  {
    icon: HeartPulse,
    title: 'Fat Loss Support',
    description: 'Nutritional advice combined with cardio routines for targeted fat reduction.',
  },
  {
    icon: Shield,
    title: 'Beginner Guidance',
    description: 'Safe, structured onboarding for those taking their first steps in fitness.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Our Core <span className="text-red-600">Services</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass p-8 group border-t-4 border-t-transparent hover:border-t-red-600 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

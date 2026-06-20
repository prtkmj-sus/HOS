import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const PLANS = [
  {
    name: 'Basic',
    price: '₹999',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey.',
    features: [
      'Access to cardio equipment',
      'Free weights area access',
      'Locker room access',
      'Basic fitness assessment',
    ],
    highlight: false,
    delay: 0.1,
  },
  {
    name: 'Standard',
    price: '₹1,999',
    period: '/month',
    description: 'Great for regular gym-goers wanting more variety.',
    features: [
      'Everything in Basic',
      'Group fitness classes',
      '1 Personal training session/mo',
      'Diet plan consultation',
      'Access to premium equipment',
    ],
    highlight: false,
    delay: 0.2,
  },
  {
    name: 'Premium',
    price: '₹3,499',
    period: '/month',
    description: 'Our most popular plan for serious transformation.',
    features: [
      'Everything in Standard',
      'Unlimited Personal Training',
      'Customized diet & macro plan',
      'Progress tracking & analytics',
      'Guest passes (2/month)',
    ],
    highlight: true,
    delay: 0.3,
  },
];

export function Membership() {
  return (
    <section id="memberships" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Pricing
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Membership <span className="text-red-600">Plans</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.delay }}
              className={cn(
                'relative flex flex-col p-8',
                plan.highlight 
                  ? 'bg-neutral-950 border-2 border-red-500 lg:-translate-y-4' 
                  : 'card-glass'
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-neutral-400 text-[14px] h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-[42px] font-[800] text-red-500">{plan.price}</span>
                <span className="text-neutral-500 ml-2 font-[600]">{plan.period}</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-red-500 shrink-0 mr-3 mt-0.5" />
                    <span className="text-neutral-300 text-[14px]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={cn(
                  'w-full py-[12px] font-[700] uppercase tracking-[1px] text-center transition-colors border-none',
                  plan.highlight
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white hover:bg-neutral-200 text-black'
                )}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

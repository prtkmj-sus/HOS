import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-red-600/10 text-red-500 text-sm font-medium border border-red-600/20 mb-6"
          >
            Premium Fitness in Ratlam
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[48px] md:text-[72px] font-[900] leading-[0.9] tracking-[-2px] text-white mb-6 uppercase"
          >
            Train <span className="text-red-500">Hard</span>. <br />
            Transform <span className="text-red-500">Strong</span>. <br />
            Build Your Best.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] text-white/80 mb-10 max-w-[500px] leading-[1.6]"
          >
            Join House Of Strength Gym for weight loss, muscle gain, and expert personal training in Ratlam. Your transformation starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#memberships"
              className="inline-flex items-center justify-center px-[32px] py-[12px] bg-red-500 hover:bg-red-600 text-white font-[700] uppercase tracking-[1px] transition-colors border-none"
            >
              Join Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-[30px] py-[10px] border-2 border-white bg-transparent hover:bg-white hover:text-black text-white font-[700] uppercase tracking-[1px] transition-colors"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Book Free Trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

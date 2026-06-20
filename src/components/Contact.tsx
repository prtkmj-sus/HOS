import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Start Today
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase"
          >
            Get In <span className="text-red-600">Touch</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-glass p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/10 p-3 rounded-lg text-red-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Location</h4>
                  <p className="text-neutral-400">4th Floor, Gayatri Mall,<br/>Gayatri Talkies Road, Ratlam</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/10 p-3 rounded-lg text-red-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Gym Timings</h4>
                  <p className="text-neutral-400">Mon - Sat: 5:30 AM - 11:00 PM<br/>Sunday: 7:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-3 rounded-xl transition-colors font-medium text-sm flex-1 justify-center">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-500 border border-green-600/20 px-4 py-3 rounded-xl transition-colors font-medium text-sm flex-1 justify-center">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden border border-neutral-800 h-64 grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14670.364230230737!2d75.03219485000001!3d23.334063250000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963feba31f3ba35%3A0xc6cb1c7e2d9cd7d8!2sGayatri%20Talkies%20Road%2C%20Ratlam%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 lg:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-[600] uppercase tracking-[1px] text-white/70">Full Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-[600] uppercase tracking-[1px] text-white/70">Phone</label>
                  <input type="tel" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="+91" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-[600] uppercase tracking-[1px] text-white/70">Email Address</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-[600] uppercase tracking-[1px] text-white/70">Primary Goal</label>
                <select className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none">
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Personal Training</option>
                  <option>General Fitness</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-[600] uppercase tracking-[1px] text-white/70">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="Tell us about your fitness journey..."></textarea>
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-[700] uppercase tracking-[1px] py-[12px] transition-colors border-none">
                Book Free Trial
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <Dumbbell className="w-8 h-8 text-red-600 group-hover:rotate-12 transition-transform" />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                HOUSE OF <span className="text-red-600">STRENGTH</span>
              </span>
            </a>
            <p className="text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Premium fitness facility located in Ratlam. Dedicated to helping you achieve your weight loss, muscle gain, and transformation goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 text-neutral-400 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-600 hover:border-neutral-500 text-neutral-400 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-600 hover:border-neutral-500 text-neutral-400 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-neutral-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#memberships" className="text-neutral-400 hover:text-red-500 transition-colors">Pricing</a></li>
              <li><a href="#trainers" className="text-neutral-400 hover:text-red-500 transition-colors">Trainers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-neutral-900 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} House Of Strength Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

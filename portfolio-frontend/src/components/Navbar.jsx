import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Your Elite Logo */}
        <div className="text-xl font-bold text-white tracking-tight cursor-pointer">
          Himanshu<span className="text-cyan-400">.dev</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
          <a href="#home" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all">
            Home
          </a>
          <a href="#expertise" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all">
            Expertise
          </a>
          <a href="#projects" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all">
            Work
          </a>
          <a href="#contact" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all">
             Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-slate-400 hover:text-cyan-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-mono text-slate-400">
              {/* Note: Clicking a link automatically closes the menu */}
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#expertise" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
                Expertise
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
                Work
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
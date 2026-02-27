import { motion } from "framer-motion";

const Hero = () => {
  // Cinematic Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    // Changed base background to a deeper, almost-black blue (#050810) to make the glow pop
    <div className="relative min-h-screen flex items-center justify-center bg-[#050810] overflow-hidden px-6">
      
      {/* --- NEW MODERN AURORA MESH BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Subtle larger tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Deep Blue Aurora Blob */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-blue-700/20 rounded-full blur-[120px]"
        />
        
        {/* Cyan Aurora Blob */}
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[40vw] h-[40vw] bg-cyan-600/20 rounded-full blur-[120px]"
        />

        {/* Indigo Center Pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 left-1/3 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[150px]"
        />

        {/* CRITICAL: The Blending Mask. 
          This fades the bottom of the Aurora effect perfectly into the #0f172a 
          background of the Expertise section below it! 
        */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0f172a]"></div>
      </div>


      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10 max-w-4xl text-center">
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-cyan-400 font-mono mb-6 text-sm md:text-base tracking-widest uppercase"
        >
          {">"} System.out.println("Hello, World!");
        </motion.p>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-extrabold mb-8 flex flex-wrap justify-center gap-x-4 tracking-tight"
        >
          <motion.span variants={wordVariants} className="text-white">
            I'm
          </motion.span>
          <motion.span variants={wordVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Himanshu
          </motion.span>
          <motion.span variants={wordVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Mishra.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A Full-Stack Software Engineer specializing in building robust, scalable backends with <span className="text-slate-200 font-semibold">Java Spring Boot</span> and dynamic, interactive frontends with <span className="text-slate-200 font-semibold">React</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="px-10 py-4 bg-cyan-500 text-slate-900 font-bold text-lg rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1"
          >
            View My Work
          </a>
          
          <a 
            href="/resume.pdf" 
            download="Himanshu_Mishra_Resume.pdf" 
            className="px-10 py-4 border border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 font-semibold text-lg rounded-full transition-all hover:-translate-y-1"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
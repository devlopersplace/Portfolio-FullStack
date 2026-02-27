import { motion } from "framer-motion";

const Contact = () => {
  // 👇 YOUR GMAIL ADDRESS IS SET HERE 👇
  const myEmail = "himanshu.mishra.dev01@gmail.com";

  return (
    // We use a slightly darker background here for a clear section break
    <div id="contact" className="w-full bg-[#080b14] border-t border-white/5 py-24 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Animated Call-To-Action Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 mb-6 tracking-tight">
            Let's Build Something.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Currently looking for new opportunities as a Backend/Full-Stack Software Engineer. Whether you have a question, a potential role, or just want to say hi, my inbox is always open!
          </p>
          
          {/* THE ORIGINAL GLOWING EMAIL BUTTON */}
          <a 
            href={`mailto:${myEmail}`} 
            className="inline-block px-10 py-4 bg-cyan-500/10 text-cyan-400 font-bold text-lg rounded-xl border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-1"
          >
            Say Hello
          </a>
        </motion.div>

        {/* Footer Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-mono"
        >
          <p>© {new Date().getFullYear()} Himanshu Mishra. 
            All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="https://github.com/devlopersplace" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
               Github
            </a>
            <a href="https://www.linkedin.com/in/himanshu-mishra-91a827214/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
               LinkedIn
            </a>
            {/* Using the variable here ensures the link matches the text */}
            <a href={`mailto:${myEmail}`} className="hover:text-cyan-400 transition-colors">
              <h2>Email</h2>
            </a>
            <a href="tel:+91-6362321410" className="hover:text-cyan-400 transition-colors">
               Phone
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
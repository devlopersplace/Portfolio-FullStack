import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import CustomCursor from "../components/CustomCursor"; // <-- 1. Imported the new cursor

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    // 2. Added `cursor-none` right here to hide the default mouse pointer
    <div id="home" className="bg-[#0f172a] min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-900 cursor-none">
      
      {/* 3. Drop the custom cursor component at the very top */}
      <CustomCursor />

      {/* 1. The Sticky Glass Navbar */}
      <Navbar />

      {/* 2. The Animated Hero Section */}
      <Hero />

      {/* 3. The Expertise/Skills Section */}
      <Expertise />

      {/* 4. TAMAL SEN INSPIRED PROJECTS SECTION */}
      <div id="projects" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        
        {/* Massive, bold section header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 tracking-tight mb-4">
            Selected Works.
          </h2>
          <div className="h-1 w-24 bg-cyan-500 rounded-full"></div>
        </motion.div>
        
        {/* The Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)] overflow-hidden"
            >
              
              {/* Subtle background gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack && project.techStack.split(',').map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Links (GitHub / Live Demo) */}
                <div className="flex items-center gap-6">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white font-semibold flex items-center gap-2 transition-colors"
                    >
                      <span>GitHub</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a 
                      href={project.liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors"
                    >
                      <span>Live Demo</span>
                      <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. The Contact Footer */}
      <Contact />

    </div>
  );
}

export default Home;
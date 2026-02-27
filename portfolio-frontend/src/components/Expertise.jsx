import { motion } from "framer-motion";

const Expertise = () => {
  // We structure your skills into logical, recruiter-friendly categories
  const skills = [
    {
      category: "Backend Development",
      description: "Designing robust, scalable APIs and microservices. Passionate about clean architecture, secure routing, and database optimization.",
      techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"],
    },
    {
      category: "Frontend Development",
      description: "Building highly interactive, responsive user interfaces with modern web technologies, ensuring seamless user experiences.",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    },
    {
      category: "Core Computer Science",
      description: "Strong foundation in problem-solving, algorithmic thinking, and writing optimized, highly efficient code.",
      techStack: ["Data Structures & Algorithms (DSA)", "OOP", "System Design"],
    },
    {
      category: "Environment & Tools",
      description: "Comfortable navigating Unix-based systems and utilizing industry-standard development and deployment tools.",
      techStack: ["Linux", "Git", "GitHub", "Postman", "Eclipse"],
    },
  ];

  return (
    // The id="expertise" ensures your navbar link scrolls right to this spot!
    <div id="expertise" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 tracking-tight mb-4">
          My Expertise.
        </h2>
        <div className="h-1 w-24 bg-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
                {skill.category}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {skill.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
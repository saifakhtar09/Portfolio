import React, { useState } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const CertificationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificationData = [
    {
      title: "Certified React Developer",
      issuer: "Udemy",
      year: "2025",
      description: "Completed a comprehensive React course, covering all essential aspects of React and building production-ready applications.",
      achievements: ["Completed 100+ hours of course content", "Built production-ready applications", "Mastered hooks and state management"],
      skills: ["React", "JavaScript", "Web Development", "Frontend Development"],
    },
    {
      title: "Java Full Stack Developer",
      issuer: "Coursera",
      year: "2024",
      description: "In-depth understanding of Java and full-stack technologies, covering front-end and back-end development.",
      achievements: ["Built a full-stack web app", "Proficient in Spring Boot, Hibernate, and REST APIs"],
      skills: ["Java", "Spring Boot", "Database Management", "Frontend Development"],
    },
    {
      title: "Web Development Bootcamp",
      issuer: "FreeCodeCamp",
      year: "2023",
      description: "Completed a rigorous bootcamp covering both front-end and back-end web development using HTML, CSS, JavaScript, and Node.js.",
      achievements: ["Built multiple web apps", "Proficient in modern web technologies", "Completed 500+ hours of coding practice"],
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            My Certifications
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of the certifications I have earned to enhance my skills and knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificationData.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cert.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {cert.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {cert.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection;

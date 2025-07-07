import { useState } from "react";
import * as m from "motion/react-m";
import { tw } from "../../twind/twind";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, payment integration, and real-time inventory management.",
    image: "/projects/classpro1.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    year: "2024",
    status: "Completed",
    github: "https://github.com/gowthamrdyy",
    live: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Chat Application",
    description: "An intelligent chat application with AI integration for smart responses and conversation analysis. Built with modern web technologies.",
    image: "/projects/rocket1.png",
    technologies: ["React", "Python", "OpenAI", "WebSocket"],
    category: "AI/ML",
    year: "2024",
    status: "In Progress",
    github: "https://github.com/gowthamrdyy",
    live: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A comprehensive task management system with team collaboration features, real-time updates, and advanced analytics.",
    image: "/projects/sdjs1.png",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    category: "Productivity",
    year: "2024",
    status: "Completed",
    github: "https://github.com/gowthamrdyy",
    live: "https://example.com",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A stunning portfolio website showcasing creative design and smooth animations. Built with modern web technologies and optimized for performance.",
    image: "/projects/unix1.png",
    technologies: ["React", "TypeScript", "Motion", "Tailwind"],
    category: "Web Design",
    year: "2025",
    status: "Completed",
    github: "https://github.com/gowthamrdyy",
    live: "https://example.com",
    featured: true
  }
];

const categories = ["All", "Web Development", "AI/ML", "Productivity", "Web Design"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={tw("space-y-12")}>
      {/* Category Filter */}
      <m.div
        className={tw("flex flex-wrap justify-center gap-4 mb-16")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <m.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={tw(`px-6 py-3 rounded-pill font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-accent text-white shadow-apple"
                : "glass text-textSecondary hover:text-textPrimary"
            }`)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </m.button>
        ))}
      </m.div>

      {/* Projects Grid */}
      <m.div
        className={tw("grid grid-cols-1 lg:grid-cols-2 gap-8")}
        layout
      >
        {filteredProjects.map((project, index) => (
          <m.div
            key={project.id}
            className={tw("glass p-6 card-hover relative overflow-hidden group")}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            layout
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className={tw("absolute top-4 right-4 z-10")}>
                <div className={tw("bg-accent text-white px-3 py-1 rounded-pill text-xs font-medium")}>
                  Featured
                </div>
              </div>
            )}

            {/* Project Image */}
            <div className={tw("relative mb-6 overflow-hidden rounded-apple")}>
              <m.img
                src={project.image}
                alt={project.title}
                className={tw("w-full h-48 object-cover")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Overlay on hover */}
              <m.div
                className={tw("absolute inset-0 bg-black/60 flex items-center justify-center gap-4")}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <m.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tw("glass p-3 rounded-apple text-white hover:bg-accent transition-colors")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className={tw("w-5 h-5")} />
                </m.a>
                <m.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tw("glass p-3 rounded-apple text-white hover:bg-accent transition-colors")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className={tw("w-5 h-5")} />
                </m.a>
              </m.div>
            </div>

            {/* Project Info */}
            <div className={tw("space-y-4")}>
              <div className={tw("flex items-start justify-between")}>
                <h3 className={tw("text-xl font-bold text-textPrimary group-hover:text-accent transition-colors")}>
                  {project.title}
                </h3>
                <div className={tw(`px-2 py-1 rounded text-xs font-medium ${
                  project.status === "Completed" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-yellow-500/20 text-yellow-400"
                }`)}>
                  {project.status}
                </div>
              </div>

              <p className={tw("text-textSecondary leading-relaxed")}>
                {project.description}
              </p>

              {/* Meta Info */}
              <div className={tw("flex items-center gap-4 text-sm text-textSecondary")}>
                <div className={tw("flex items-center gap-1")}>
                  <Calendar className={tw("w-4 h-4")} />
                  <span>{project.year}</span>
                </div>
                <div className={tw("flex items-center gap-1")}>
                  <Tag className={tw("w-4 h-4")} />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className={tw("flex flex-wrap gap-2")}>
                {project.technologies.map((tech, techIndex) => (
                  <m.span
                    key={tech}
                    className={tw("px-3 py-1 bg-surface text-textPrimary rounded-pill text-xs font-medium")}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  >
                    {tech}
                  </m.span>
                ))}
              </div>
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Call to Action */}
      <m.div
        className={tw("text-center mt-16")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className={tw("text-textSecondary mb-6")}>
          Want to see more of my work?
        </p>
        <m.a
          href="https://github.com/gowthamrdyy"
          target="_blank"
          rel="noopener noreferrer"
          className={tw("apple-button inline-flex items-center gap-2")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className={tw("w-5 h-5")} />
          View All Projects
        </m.a>
      </m.div>
    </div>
  );
}
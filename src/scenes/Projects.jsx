import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    url: require("../assets/balihans.png"),
    title: "BALIHANS",
    description: [
      "Developed and deployed a responsive full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js)",
      "Integrated Cloudinary for scalable media hosting and optimized image delivery, improving load times by 40%",
      "Hosted applications on Google Cloud Platform (Cloud Run) for both frontend and backend, ensuring 99.9% uptime",
      "Delivered a mobile-first, performance-optimized website with clean, maintainable code following industry best practices"
    ],
    tools: "React.js • Tailwind CSS • Node.js • Express.js • MongoDB • GCP • Cloudinary",
    link: "https://balihans.com/",
    id: 1,
    color: "text-gray-300",
    shadow: "yes",
    category: "Full-Stack",
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    url: require("../assets/smartsearch.png"),
    title: "Smart Search ",
    description: [
      "Developed an AI-powered internal search system with hybrid search logic combining keyword matching (60%) and semantic similarity (40%) using Gemini embeddings for highly relevant results",
      "Built intelligent auto-categorization pipeline using Gemini AI and enabled multi-format ingestion with text extraction for PDF, DOCX, TXT, and Markdown files",
      "Integrated Cloudinary for scalable CDN-optimized file storage and designed a fast, responsive UI with advanced filters and real-time upload feedback (5-15 seconds)",
      "Deployed production-ready full stack using Vercel (frontend + backend), MongoDB Atlas, and engineered robust backend with Node.js, Express, and Multer"
    ],
    tools: "React.js • Tailwind CSS • Nodejs • Gemini Ai • Cloudinary • Vercel",
    link: "https://smart-search-m7v6-frontend.vercel.app/",
    id: 2,
    color: "text-gray-300",
    shadow: "yes",
    category: "Full-Stack",
    gradient: "from-green-600/20 to-teal-600/20"
  },
  {
    url: require("../assets/artistly.png"),
    title: "Artistly",
    description: [
      "Engineered a responsive multi-page frontend application simulating a real-world booking platform with filterable artist listing system using reusable components",
      "Implemented a multi-step onboarding form with validation (React Hook Form + Yup), supporting dropdowns, multi-select, and file upload",
      "Optimized for frontend performance and mobile responsiveness, achieving 95+ Lighthouse scores",
      "Deployed on Vercel with CI/CD pipeline for seamless updates and version control"
    ],
    tools: "Next.js (App Router) • Tailwind CSS • Framer Motion • React Hook Form • Vercel",
    link: "https://aartisttly.vercel.app/",
    id: 3,
    color: "text-gray-300",
    shadow: "yes",
    category: "Frontend",
    gradient: "from-purple-600/20 to-pink-600/20"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section id="projects" className="relative">
      <div className="px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 md:mb-16 lg:mb-20"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica tracking-wide text-yellow-300 mb-4">
            PROJECTS
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-transparent"></div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-gray-900/50 backdrop-blur-md rounded-xl p-2 border border-gray-700/50 shadow-2xl">
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => setSelectedProject(index)}
                className={`px-6 py-3 rounded-lg text-sm font-helvetica tracking-wide transition-all duration-300 relative overflow-hidden ${
                  selectedProject === index 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-lg' 
                    : 'text-gray-300 hover:text-yellow-300 hover:bg-gray-800/50'
                }`}
              >
                <span className="relative z-10">{card.title.split(' – ')[0]}</span>
                {selectedProject === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Single Project Display */}
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Card Container */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
              
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cards[selectedProject].gradient} opacity-30`}></div>
              
              {/* Project Image Section */}
              <a href={cards[selectedProject].link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="group relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${cards[selectedProject].url})` }}
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/60 transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-300/90 text-black text-xs font-helvetica tracking-wide rounded-full">
                      {cards[selectedProject].category}
                    </span>
                  </div>
                  
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-helvetica tracking-wide text-md md:text-lg lg:text-xl font-bold mb-2">
                      {cards[selectedProject].title}
                    </h3>
                  </div>

                  {/* Hover Effect - External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-10 h-10 bg-yellow-300/90 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
              
              {/* Content Section */}
              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-yellow-300 font-helvetica text-md md:text-lg lg:text-xl tracking-wide mb-5 uppercase">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {cards[selectedProject].tools.split(' • ').map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 text-sm md:text-md lg:text-lg font-helvetica rounded-lg border border-gray-600/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-yellow-300 font-helvetica text-md md:text-lg lg:text-xl tracking-wide mb-3 uppercase">About Project</h4>
                  <ul className="space-y-2">
                    {cards[selectedProject].description.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-yellow-300 mt-1.5 text-xs">●</span>
                        <p className="font-helvetica tracking-wide text-gray-300 text-sm md:text-md lg:text-lg leading-relaxed">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="flex justify-between items-center">
                  <a 
                    href={cards[selectedProject].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-6 py-3 rounded-xl font-helvetica tracking-wide hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {/* Project Counter */}
                  <div className="text-gray-500 font-helvetica text-sm">
                    {String(selectedProject + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-300/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
// import { motion } from "framer-motion";

// const cards = [
//   {
//     url: require("../assets/balihans.png"),
//     title: "BALIHANS",
//     description:
//       "Full-stack MERN web app hosted on Google Cloud Run. Features optimized media handling via Cloudinary, responsive UI, and seamless performance across devices.",
//     tools: "React.js • Tailwind CSS • Node.js • Express.js • MongoDB • GCP • Cloudinary",
//     link: "https://balihans.com/",
//     id: 1,
//     color: "text-gray-300",
//     shadow: "yes",
//   },
//   {
//     url: require("../assets/evolt.png"),
//     title: "EVOLT",
//     description:
//       "Modern web app built with React and Tailwind, integrated with Firebase for real-time data and secure auth. Fully responsive with smooth user interactions.",
//     tools: "React.js • Tailwind CSS • Firebase (Auth, Realtime DB, Hosting)",
//     link: "https://ecocharge-18a51.web.app/",
//     id: 2,
//     color: "text-gray-300",
//     shadow: "yes",
//   },
//   {
//     url: require("../assets/artistly.png"),
//     title: "Artistly",
//     description:
//       "Next.js portfolio platform with dynamic filters, dark mode, animation, and responsive design. Built with best practices and deployed on Vercel.",
//     tools:
//       "Next.js (App Router) • Tailwind CSS • Framer Motion • React Hook Form • Vercel",
//     link: "https://aartisttly.vercel.app/",
//     id: 3,
//     color: "text-gray-300",
//     shadow: "yes",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="relative">
//       <div className="px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
//         <div className="flex items-center justify-start my-14">
//           <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica tracking-wide z-10 text-left text-yellow-300">
//             PROJECTS
//           </p>
//         </div>

//         <div className="space-y-8 md:space-y-12">
//           {cards.map((card, index) => (
//             <motion.div
//               key={card.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="w-full max-w-4xl mx-auto"
//             >
//               <a href={card.link} target="_blank" rel="noopener noreferrer">
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                   className="group relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center rounded-t-md overflow-hidden"
//                   style={{ backgroundImage: `url(${card.url})` }}
//                 >
//                   <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
//                   <p className={`absolute top-0 left-0 bg-black bg-opacity-80 text-white font-helvetica tracking-wide text-sm md:text-base lg:text-lg ${card.color} p-4 md:p-6`}>
//                     {card.title}
//                   </p>
//                 </motion.div>
//               </a>
              
//               <div className="p-4 md:p-6 lg:p-8 bg-black rounded-b-md shadow-lg">
//                 <p
//                   className={`font-helvetica tracking-wide text-xs md:text-sm lg:text-base opacity-75 ${card.color} mb-4`}
//                   dangerouslySetInnerHTML={{ __html: card.tools.replace(/\s/g, '&nbsp;') }}
//                 ></p>
//                 <p
//                   className={`font-helvetica tracking-wide text-sm md:text-base lg:text-lg leading-relaxed ${card.color} ${card.shadow === 'yes' ? 'text-shadow-md' : ''}`}
//                 >
//                   {card.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import { motion } from "framer-motion";
// import { useState } from "react";

// const cards = [
//   {
//      url: require("../assets/balihans.png"),
//     title: "BALIHANS",
//     description:
//       "Full-stack MERN web app hosted on Google Cloud Run. Features optimized media handling via Cloudinary, responsive UI, and seamless performance across devices.",
//     tools: "React.js • Tailwind CSS • Node.js • Express.js • MongoDB • GCP • Cloudinary",
//     link: "https://balihans.com/",
//     id: 1,
//     color: "text-gray-300",
//     shadow: "yes",
//   },
//   {
//      url: require("../assets/evolt.png"),
//     title: "EVOLT",
//     description:
//       "Modern web app built with React and Tailwind, integrated with Firebase for real-time data and secure auth. Fully responsive with smooth user interactions.",
//     tools: "React.js • Tailwind CSS • Firebase (Auth, Realtime DB, Hosting)",
//     link: "https://ecocharge-18a51.web.app/",
//     id: 2,
//     color: "text-gray-300",
//     shadow: "yes",
//   },
//   {
//    url: require("../assets/artistly.png"),
//     title: "Artistly",
//     description:
//       "Next.js portfolio platform with dynamic filters, dark mode, animation, and responsive design. Built with best practices and deployed on Vercel.",
//     tools:
//       "Next.js (App Router) • Tailwind CSS • Framer Motion • React Hook Form • Vercel",
//     link: "https://aartisttly.vercel.app/",
//     id: 3,
//     color: "text-gray-300",
//     shadow: "yes",
//   },
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(0);

//   return (
//     <section id="projects" className="relative">
//       <div className="px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="text-left mb-12 md:mb-16 lg:mb-20"
//         >
//           <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica tracking-wide text-yellow-300 mb-4">
//             PROJECTS
//           </p>
//         </motion.div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center mb-8">
//           <div className="flex gap-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-2 border border-gray-700">
//             {cards.map((card, index) => (
//               <button
//                 key={card.id}
//                 onClick={() => setSelectedProject(index)}
//                 className={`px-4 py-2 rounded-md text-sm font-helvetica tracking-wide transition-all duration-300 ${
//                   selectedProject === index 
//                     ? 'bg-yellow-300 text-black' 
//                     : 'text-gray-300 hover:text-yellow-300 hover:bg-gray-700'
//                 }`}
//               >
//                 {card.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Single Project Display */}
//         <div className="w-full max-w-4xl mx-auto">
//           <motion.div
//             key={selectedProject}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <a href={cards[selectedProject].link} target="_blank" rel="noopener noreferrer">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//                 className="group relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center rounded-t-md overflow-hidden"
//                 style={{ backgroundImage: `url(${cards[selectedProject].url})` }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
//                 <p className={`absolute top-0 left-0 bg-black bg-opacity-80 text-white font-helvetica tracking-wide text-sm md:text-base lg:text-lg ${cards[selectedProject].color} p-4 md:p-6`}>
//                   {cards[selectedProject].title}
//                 </p>
//               </motion.div>
//             </a>
                           
//             <div className="p-4 md:p-6 lg:p-8 bg-black rounded-b-md shadow-lg">
//               <p
//                 className={`font-helvetica tracking-wide text-xs md:text-sm lg:text-base opacity-75 ${cards[selectedProject].color} mb-4`}
//                 dangerouslySetInnerHTML={{ __html: cards[selectedProject].tools.replace(/\s/g, '&nbsp;') }}
//               ></p>
//               <p
//                 className={`font-helvetica tracking-wide text-sm md:text-base lg:text-lg leading-relaxed ${cards[selectedProject].color} ${cards[selectedProject].shadow === 'yes' ? 'text-shadow-md' : ''}`}
//               >
//                 {cards[selectedProject].description}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    url: require("../assets/balihans.png"),
    title: "BALIHANS",
    description:
      "Full-stack MERN web app hosted on Google Cloud Run. Features optimized media handling via Cloudinary, responsive UI, and seamless performance across devices.",
    tools: "React.js • Tailwind CSS • Node.js • Express.js • MongoDB • GCP • Cloudinary",
    link: "https://balihans.com/",
    id: 1,
    color: "text-gray-300",
    shadow: "yes",
    category: "Full-Stack",
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    url: require("../assets/evolt.png"),
    title: "EVOLT",
    description:
      "Modern web app built with React and Tailwind, integrated with Firebase for real-time data and secure auth. Fully responsive with smooth user interactions.",
    tools: "React.js • Tailwind CSS • Firebase (Auth, Realtime DB, Hosting)",
    link: "https://ecocharge-18a51.web.app/",
    id: 2,
    color: "text-gray-300",
    shadow: "yes",
    category: "Full-Stack",
    gradient: "from-green-600/20 to-teal-600/20"
  },
  {
    url: require("../assets/artistly.png"),
    title: "Artistly",
    description:
      "Next.js portfolio platform with dynamic filters, dark mode, animation, and responsive design. Built with best practices and deployed on Vercel.",
    tools:
      "Next.js (App Router) • Tailwind CSS • Framer Motion • React Hook Form • Vercel",
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
                <span className="relative z-10">{card.title}</span>
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
                  <p className="font-helvetica tracking-wide text-gray-300 text-sm md:text-md lg:text-lg leading-relaxed">
                    {cards[selectedProject].description}
                  </p>
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
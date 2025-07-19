import { motion } from "framer-motion";

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
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-start my-14">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica tracking-wide z-10 text-left text-yellow-300">
            PROJECTS
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full max-w-4xl mx-auto"
            >
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center rounded-t-md overflow-hidden"
                  style={{ backgroundImage: `url(${card.url})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <p className={`absolute top-0 left-0 bg-black bg-opacity-80 text-white font-helvetica tracking-wide text-sm md:text-base lg:text-lg ${card.color} p-4 md:p-6`}>
                    {card.title}
                  </p>
                </motion.div>
              </a>
              
              <div className="p-4 md:p-6 lg:p-8 bg-black rounded-b-md shadow-lg">
                <p
                  className={`font-helvetica tracking-wide text-xs md:text-sm lg:text-base opacity-75 ${card.color} mb-4`}
                  dangerouslySetInnerHTML={{ __html: card.tools.replace(/\s/g, '&nbsp;') }}
                ></p>
                <p
                  className={`font-helvetica tracking-wide text-sm md:text-base lg:text-lg leading-relaxed ${card.color} ${card.shadow === 'yes' ? 'text-shadow-md' : ''}`}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
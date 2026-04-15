import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,  FaCloud, FaServer,  } from 'react-icons/fa';
import { SiTailwindcss,  SiMongodb, SiGooglecloud, SiNextdotjs, SiExpress, SiVercel, SiVite, } from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from 'framer-motion';


const skills = [
    // Frontend Development
    { name: 'HTML5', icon: <FaHtml5 />, color: 'hover:text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'hover:text-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'hover:text-yellow-400' },
    { name: 'React.js', icon: <FaReact />, color: 'hover:text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'hover:text-white' }, 
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'hover:text-teal-400' },
     { name: 'Framer Motion', icon: <TbBrandFramerMotion />, color: 'hover:text-teal-400' },

    // Backend Development
    { name: 'Node.js', icon: <FaNodeJs />, color: 'hover:text-green-500' },
    { name: 'Express.js', icon: <SiExpress />, color: 'hover:text-gray-400' }, 
    { name: 'RESTful APIs', icon: <FaServer />, color: 'hover:text-red-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'hover:text-green-400' },

    // Tools & Technologies
    { name: 'Git', icon: <FaGitAlt />, color: 'hover:text-orange-600' },
    { name: 'Vite', icon: <SiVite />, color: 'hover:text-purple-500' },
    { name: 'Vercel', icon: <SiVercel />, color: 'hover:text-white' },
    { name: 'GCP', icon: <SiGooglecloud />, color: 'hover:text-blue-500' },
    { name: 'Cloudinary', icon: <FaCloud />, color: 'hover:text-cyan-600' },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 text-white">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-left mb-12 md:mb-16 lg:mb-20"
            >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica tracking-wide text-yellow-300 mb-4">
                    SKILLS
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-transparent"></div>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.05, // Reduced delay for faster animation with more skills
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            y: -5
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                    >
                        <div className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl border border-gray-600 bg-black bg-opacity-20 backdrop-blur-sm transform transition-all duration-300 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-300/20 hover:bg-opacity-30 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                            {/* Icon */}
                            <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-white transition-all duration-300 group-hover:scale-110 ${skill.color}`}>
                                {skill.icon}
                            </div>
                            
                            {/* Skill Name */}
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-helvetica tracking-wide text-center leading-tight group-hover:text-yellow-300 transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
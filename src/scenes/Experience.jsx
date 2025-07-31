import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
    {
        id: 1,
        company: "Balihans",
        position: "Software Associate Intern",
        duration: "10/2024 - 01/2025",
        location: "Remote",
        type: "Full Time",
        description: "Full-stack MERN web app hosted on Google Cloud Run. Features optimized media handling via Cloudinary, responsive UI, and seamless performance across devices.",
        achievements: [
            "Developed and deployed a full-stack web application using the MERN stack",
            "Integrated Cloudinary for efficient media hosting and optimized performance for a seamless user experience.",
            "Hosted the application on Google Cloud Platform (GCP)using Cloud Run for backend and frontend services. ",
            "Built a feature-rich, responsive website "
        ],
        technologies: ["React","Tailwind-Css", "Node.js", "MongoDB", "Express", "GCP", "Cloudinary"],
        
    }
];

const Experience = () => {
    const [selectedExperience] = useState(0);

    return (
        <section 
            id="experience" 
            className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 md:py-16 lg:py-28"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-left mb-12 md:mb-16 lg:mb-20"
            >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-helvetica tracking-wide text-yellow-300 mb-4">
                    EXPERIENCE
                </p>
                 <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-transparent"></div>
            </motion.div>

            {/* Experience Details */}
            <div className="w-full">
                <motion.div
                    key={selectedExperience}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 border border-gray-700 hover:border-yellow-300 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/10"
                >
                    {/* Header */}
                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                     
                        

                        {/* Position and Company Details */}
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-helvetica tracking-wide font-semibold text-white mb-2">
                                {experiences[selectedExperience].position}
                            </h2>
                            <h3 className="text-base sm:text-lg md:text-xl font-helvetica tracking-wide text-gray-300 mb-3">
                                {experiences[selectedExperience].company}
                            </h3>
                            
                            {/* Duration and Type Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-300 bg-opacity-20 border border-yellow-300 border-opacity-30">
                                    <span className="text-xs sm:text-sm font-helvetica tracking-wide text-yellow-300">
                                        {experiences[selectedExperience].duration}
                                    </span>
                                </div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 bg-opacity-30 border border-gray-600">
                                    <span className="text-xs sm:text-sm font-helvetica tracking-wide text-gray-300">
                                        {experiences[selectedExperience].type}
                                    </span>
                                </div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 bg-opacity-30 border border-gray-600">
                                    <span className="text-xs sm:text-sm font-helvetica tracking-wide text-gray-300">
                                        {experiences[selectedExperience].location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <p className="text-sm sm:text-base md:text-lg font-helvetica tracking-wide text-gray-300 leading-relaxed">
                            {experiences[selectedExperience].description}
                        </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                        <h4 className="text-base sm:text-lg font-helvetica tracking-wide text-white mb-3">
                            Key Achievements
                        </h4>
                        <div className="space-y-2">
                            {experiences[selectedExperience].achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2.5 flex-shrink-0"></div>
                                    <p className="text-sm sm:text-base font-helvetica tracking-wide text-gray-300">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-gray-700">
                        <h4 className="text-base sm:text-lg font-helvetica tracking-wide text-white mb-3">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {experiences[selectedExperience].technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="px-3 py-1 text-xs sm:text-sm bg-gray-800 text-gray-300 rounded-md font-helvetica tracking-wide hover:bg-yellow-300 hover:text-black transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
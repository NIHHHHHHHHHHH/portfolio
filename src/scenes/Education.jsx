import { motion } from "framer-motion";
import Mumbai from "../assets/mumbai.logo.png";

const Education = () => {
    return (
        <section 
            id="education" 
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20"
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
                    EDUCATION
                </p>
            </motion.div>

            {/* Education Timeline */}
            <div className="relative max-w-7xl mx-auto">
                {/* Timeline line - hidden on mobile, visible on larger screens */}
               

                {/* Education Item */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >


                    {/* Education Card - Now aligned to the left */}
                    <div className="md:w-1/2 md:pr-8">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 border border-gray-700 hover:border-yellow-300 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/10">
                            
                            {/* Header with Logo and University */}
                            <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-6">
                                
                                {/* University Logo */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm border border-gray-600 flex items-center justify-center p-2">
                                        <img 
                                            src={Mumbai} 
                                            alt="University of Mumbai" 
                                            className="w-full h-full object-contain rounded-lg" 
                                        />
                                    </div>
                                </div>

                                {/* University Details */}
                                <div className="flex-1 min-w-0">
                                    
                                    {/* University Name */}
                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-helvetica tracking-wide font-semibold text-white mb-2">
                                        University of Mumbai
                                    </h3>

                                    {/* Duration Badge */}
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-300 bg-opacity-20 border border-yellow-300 border-opacity-30 mb-4">
                                        <span className="text-xs sm:text-sm font-helvetica tracking-wide text-yellow-300">
                                            2021 — 2024
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Degree Information */}
                            <div className="space-y-3">
                                <div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-helvetica tracking-wide text-gray-300 mb-1">
                                        Bachelor of Engineering
                                    </h4>
                                    <p className="text-sm sm:text-base md:text-lg font-helvetica tracking-wide text-lightgrey">
                                        Computer Engineering
                                    </p>
                                </div>

                                {/* Optional: Additional details */}
                                <div className="pt-4 border-t border-gray-700">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md font-helvetica tracking-wide">
                                            Full Stack Development
                                        </span>
                                        <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md font-helvetica tracking-wide">
                                            Software Engineering
                                        </span>
                                        <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md font-helvetica tracking-wide">
                                            Data Structures
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;

import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";


// Footer Component
const Footer = () => {
    return (
        <footer className="w-full bg-black bg-opacity-20 backdrop-blur-sm border-t border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4"
                >
                    {/* Copyright */}
                    <div className="order-2 sm:order-1">
                        <p className="font-helvetica text-sm sm:text-base md:text-lg text-lightgrey text-center sm:text-left tracking-wide">
                            NIHHHHHH © 2024
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="order-1 sm:order-2">
                        <SocialMediaIcons />
                    </div>
                </motion.div>

                {/* Optional: Back to top button */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mt-8 pt-8 border-t border-gray-800"
                >
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-300 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 border border-yellow-300 border-opacity-30 hover:border-opacity-50"
                    >
                        <span className="font-helvetica text-sm text-yellow-300 tracking-wide">
                            Back to Top
                        </span>
                        <svg 
                            className="w-4 h-4 text-yellow-300 transform group-hover:-translate-y-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </footer>
    );
};


export default Footer;
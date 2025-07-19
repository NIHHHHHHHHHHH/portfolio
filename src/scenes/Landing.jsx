import resume from "../assets/My Resume.pdf";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from 'react-typed';

const Landing = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-10 md:py-16 lg:py-20"
        >
            {/* LANDING TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                className="z-30 w-full max-w-4xl"
            >
                <div>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-helvetica tracking-wide text-yellow-300 leading-tight">
                        I'M NIHAL GAVANDI
                    </p>
                    
                    <div className="mt-6 md:mt-8 lg:mt-10">
                        <p className="font-helvetica tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
                            <Typed
                                strings={['Software Developer', 'MERN Stack Developer', 'Frontend Developer']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </p>
                    </div>
                    
                    <p className="mt-6 md:mt-8 lg:mt-10 font-helvetica tracking-wide text-sm sm:text-base md:text-lg lg:text-xl text-lightgrey leading-relaxed max-w-3xl">
                        As a proficient Software developer, I create elegant, user-friendly Websites.
                        My solid software development background and up-to-date tech knowledge ensure
                        I deliver top-notch code that surpasses client expectations.
                    </p>
                </div>

                {/* BUTTONS SECTION */}
                <div className="flex flex-col sm:flex-row mt-8 md:mt-10 lg:mt-12 items-start sm:items-center gap-4 sm:gap-6">
                    {/* RESUME BUTTON */}
                    <motion.a
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <div className="text-sm sm:text-base md:text-lg bg-white text-darkgrey transition-all duration-500 flex items-center justify-center font-helvetica tracking-wide px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-3xl hover:bg-yellow-300 hover:scale-105 active:scale-95">
                            Resume
                        </div>
                    </motion.a>

                    {/* EMAIL */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm sm:text-base md:text-lg"
                    >
                        <a 
                            href="mailto:nihalgavandi00@gmail.com" 
                            className="relative flex items-center group font-helvetica tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
                        >
                            <span className="break-all sm:break-normal">nihalgavandi00@gmail.com</span>
                            <GoArrowUpRight 
                                size={20} 
                                className="ml-2 flex-shrink-0 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                            />
                            <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-[1px] bg-yellow-300 transition-all duration-300"></span>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Landing;
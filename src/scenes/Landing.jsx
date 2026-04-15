import resume from "../assets/ResumewithPiic.pdf";
import { GoArrowUpRight } from "react-icons/go";

const Landing = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-10 md:py-16 lg:py-20"
        >
            {/* LANDING TEXT - Removed motion for static appearance */}
            <div className="z-30 w-full max-w-4xl">
                <div>
                    {/* PROFESSIONAL GREETING */}
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-helvetica tracking-wide text-yellow-300 leading-tight">
                        Hi, I'm Nihal Gavandi
                    </p>

                    {/* STATIC JOB TITLE */}
                    <div className="mt-6 md:mt-8 lg:mt-10">
                        <h1 className="font-helvetica tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
                            Frontend Developer
                        </h1>
                    </div>

                    {/* NEW PROFESSIONAL SUMMARY */}
                   <p className="mt-6 md:mt-8 lg:mt-10 font-helvetica tracking-wide text-sm sm:text-base md:text-lg lg:text-xl text-lightgrey leading-relaxed max-w-3xl text-justify">
                    Frontend developer specializing in Next.js, React, and Tailwind CSS with passion for bleeding-edge technologies and craft-focused development. Experienced in building modern web applications using Next.js 15 App Router, shadcn/ui, Framer Motion, and design systems. Detail-oriented developer who values creating unique, high-quality solutions with clean architecture and pixel-perfect implementations.
                    </p>
                </div>

                {/* BUTTONS SECTION */}
                <div className="flex flex-col sm:flex-row mt-8 md:mt-10 lg:mt-12 items-start sm:items-center gap-4 sm:gap-6">
                    {/* RESUME BUTTON - Removed motion for static appearance */}
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <div className="text-sm sm:text-base md:text-lg bg-white text-darkgrey transition-all duration-500 flex items-center justify-center font-helvetica tracking-wide px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-3xl hover:bg-yellow-300 hover:scale-105 active:scale-95">
                            Resume
                        </div>
                    </a>

                    {/* EMAIL - Removed motion for static appearance */}
                    <div className="text-sm sm:text-base md:text-lg">
                        <a
                            // Ensure the mailto link is correct
                            href="mailto:nihalgavandi00@gmail.com"
                            className="relative flex items-center group font-helvetica tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
                        >
                            {/* Ensure the displayed email is correct */}
                            <span className="break-all sm:break-normal">nihalgavandi00@gmail.com</span>
                            <GoArrowUpRight
                                size={20}
                                className="ml-2 flex-shrink-0 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                            />
                            <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-[1px] bg-yellow-300 transition-all duration-300"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;


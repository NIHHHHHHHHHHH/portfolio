import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import resume from "../assets/ResumewithPiic.pdf";
import HamburgerButton from "../components/HamburgerButton";

const Link = ({ page, setSelectedPage, onClick, isMobile = false }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`inline-block hover:text-yellow-300 transition-colors duration-300 ${
                isMobile 
                    ? "text-2xl sm:text-3xl py-3 block w-full text-center" 
                    : "text-base lg:text-lg xl:text-xl"
            }`}
            href={`#${lowerCasePage}`}
            offset={() => 100}
            onClick={(e) => {
                setSelectedPage(lowerCasePage);
                if (onClick) onClick(e);
            }}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [navbarBackground, setNavbarBackground] = useState("bg-darkgrey bg-opacity-40 backdrop-filter backdrop-blur-sm");

    // Close mobile menu when screen size changes
    useEffect(() => {
        if (isAboveSmallScreens) {
            setIsMenuToggled(false);
        }
    }, [isAboveSmallScreens]);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBackground("bg-darkgrey bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg");
            } else {
                setNavbarBackground("bg-darkgrey bg-opacity-40 backdrop-filter backdrop-blur-sm");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuToggled && !isAboveSmallScreens) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [isMenuToggled, isAboveSmallScreens]);

    const handleToggleMenu = () => {
        setIsMenuToggled(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsMenuToggled(false);
    };

    const handleOverlayClick = (e) => {
        // Only close if clicking the overlay, not the menu content
        if (e.target === e.currentTarget) {
            setIsMenuToggled(false);
        }
    };

    return (
        <>
            <nav className={`${navbarBackground} text-white z-50 w-full fixed top-0 transition-all duration-300`}>
                <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 md:py-4">
                    {/* LOGO */}
                    <div className="flex-shrink-0 z-50">
                        <img 
                            src={logo} 
                            alt="nihal-logo" 
                            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300" 
                        />
                    </div>

                    {/* DESKTOP NAV */}
                    {isAboveSmallScreens ? (
                        <div className="flex justify-between items-center gap-6 lg:gap-8 xl:gap-12 font-helvetica tracking-wide font-medium">
                            <Link
                                page="Projects"
                                setSelectedPage={setSelectedPage}
                            />
                             <Link
                                page="Experience"
                                setSelectedPage={setSelectedPage}
                            />
                          
                            <Link
                                page="Skills"
                                setSelectedPage={setSelectedPage}
                            />
                              <Link
                                page="Education"
                                setSelectedPage={setSelectedPage}
                            />
                            <a 
                                href={resume} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-300 transition-colors duration-300 text-base lg:text-lg xl:text-xl"
                            >
                                Resume
                            </a>
                        </div>
                    ) : (
                        <div className="z-50 relative">
                            <HamburgerButton 
                                active={isMenuToggled} 
                                setActive={handleToggleMenu} 
                            />
                        </div>
                    )}
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            {!isAboveSmallScreens && (
                <div 
                    className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
                        isMenuToggled 
                            ? "opacity-100 visible" 
                            : "opacity-0 invisible pointer-events-none"
                    }`}
                    onClick={handleOverlayClick}
                >
                    {/* Background Overlay */}
                    <div 
                        className="absolute inset-0 bg-darkgrey bg-opacity-95 backdrop-blur-xl"
                    />
                    
                    {/* Menu Content */}
                    <div className="relative z-50 h-full flex flex-col justify-center items-center px-4">
                        <div 
                            className={`flex flex-col gap-6 sm:gap-8 text-center font-helvetica tracking-wide w-full max-w-sm transform transition-all duration-300 ease-out ${
                                isMenuToggled 
                                    ? "translate-y-0 opacity-100 scale-100" 
                                    : "translate-y-8 opacity-0 scale-95"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link
                                page="Projects"
                                setSelectedPage={setSelectedPage}
                                onClick={handleLinkClick}
                                isMobile={true}
                            />
                            <Link
                                page="Education"
                                setSelectedPage={setSelectedPage}
                                onClick={handleLinkClick}
                                isMobile={true}
                            />
                            <Link
                                page="Skills"
                                setSelectedPage={setSelectedPage}
                                onClick={handleLinkClick}
                                isMobile={true}
                            />
                            <a 
                                href={resume} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-yellow-300 transition-colors duration-300 text-2xl sm:text-3xl py-3 block w-full text-center"
                                onClick={handleLinkClick}
                            >
                                Resume
                            </a>
                        </div>
                        
                        {/* Close instruction */}
                        <p className="absolute bottom-8 text-sm text-gray-400 font-helvetica tracking-wide animate-pulse">
                            Tap outside to close
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
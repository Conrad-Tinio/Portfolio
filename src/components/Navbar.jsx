import { cn } from "@/lib/utils"
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [isDarkMode, setIsDarkMode] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); 
        }

        // Theme initialization
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true); 
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false); 
            document.documentElement.classList.remove("dark");
        }

        window.addEventListener("scroll", handleScroll); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true); 
        }
    }

    return <nav className={cn(
        "fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
    )}>
        <div className="container flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> ConradDev </span> Portfolio
                </span>  
            </a>

            {/* DESKTOP VERSION */}
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, key)  => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                        {item.name} 
                    </a>
                ))}
                
                {/* Theme Toggle for Desktop */}
                <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full transition-colors duration-300 hover:bg-secondary/50"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                > 
                    {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> 
                                : <Moon className="h-5 w-5 text-blue-900"/>} 
                </button>
            </div>

            {/* MOBILE VERSION - Header */}
            <div className="md:hidden flex items-center space-x-2">
                {/* Theme Toggle for Mobile */}
                <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full transition-colors duration-300 hover:bg-secondary/50"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                > 
                    {isDarkMode ? <Sun className="h-5 w-5 text-yellow-300" /> 
                                : <Moon className="h-5 w-5 text-blue-900"/>} 
                </button>

                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="p-2 text-foreground z-50 relative"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                > 
                    {isMenuOpen ? <X size={24} /> : <Menu size={24}/> } 
                </button>
            </div>

            {/* MOBILE MENU OVERLAY - Fixed positioning relative to viewport */}
            <div className={cn(
                "fixed top-0 left-0 right-0 bottom-0 z-40", 
                "flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                "backdrop-blur-md bg-background/85",
                "min-h-screen",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl items-center">
                    {navItems.map((item, key)  => (
                        <a  key={key} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}> 
                            {item.name} 
                        </a>
                    ))}
                    
                    {/* Theme Toggle inside Mobile Menu */}
                    <button 
                        onClick={toggleTheme} 
                        className="p-3 rounded-full transition-colors duration-300 hover:bg-secondary/50 mt-4"
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    > 
                        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> 
                                    : <Moon className="h-6 w-6 text-blue-900"/>} 
                    </button>
                </div>
            </div>
        </div>
    </nav>
}
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-1 w-full z-50 transition-all duration-100 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm py-4 border-border"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-accent"> Daniel Huynh</span>
        </div>
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

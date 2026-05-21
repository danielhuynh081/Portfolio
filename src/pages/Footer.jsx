import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <span>© 2026 Daniel Huynh</span>
          <div className="flex space-x-8">
            <a
              href="https://github.com/danielhuynh081"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/danielhuynh6/"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <span>Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

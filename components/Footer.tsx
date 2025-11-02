import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-light-secondary dark:text-dark-secondary border-t border-light-border dark:border-dark-border">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-light-text dark:hover:text-dark-text transition">Home</a>
          <a href="#about" className="hover:text-light-text dark:hover:text-dark-text transition">About</a>
          <a href="#blog" className="hover:text-light-text dark:hover:text-dark-text transition">Blog</a>
          <a href="#contact" className="hover:text-light-text dark:hover:text-dark-text transition">Contact</a>
        </div>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Ganesh Kumar. All Rights Reserved.
        </p>
        <p className="text-sm mt-1">
          Made with 💙 using AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
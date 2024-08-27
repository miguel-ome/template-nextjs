'use client';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <button onClick={toggleMenu} className="p-2">
        <MdMenu size="40" color="white" />
      </button>

      {/* Overlay to close the menu when clicked outside */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 ease-in-out z-10 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>

      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-darkGray text-white transform transition-transform duration-300 ease-in-out z-20 flex flex-col items-end
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <span className="p-8">
          <MdClose size="60" color="white" onClick={toggleMenu} />
        </span>
        <ul className="p-4 space-y-4 h-1/2 w-full flex flex-col justify-between items-center">
          <li>
            <a href="#home" className="text-xl" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-xl" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-xl" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xl" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

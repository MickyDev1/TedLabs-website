import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";
import { Button, navLinks } from ".";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import LanguageSelector from "./google/LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex items-center justify-between py-5 md:py-2.5 px-3 md:px-5">

      <div className="flex-1">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[80px] h-[40px] md:w-[115px] md:h-[62px]" />
        </Link>
      </div>


      <div className="flex-2 px-4">
        <div className="hidden md:flex items-center justify-between gap-5 bg-[#F7F7FD] rounded-4xl py-5 px-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                `text-base leading-[100%] cursor-pointer ${isActive ? "font-semibold text-primary" : "font-medium hover:text-primary/90"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Language Selector */}



      <div className="hidden md:flex gap-8 items-center flex-1 justify-end">
        <LanguageSelector />
        <Button text={"Schedule a Call"} />
      </div>


      <HiMenu className="cursor-pointer block md:hidden w-10 h-10" onClick={() => setIsMenuOpen(true)} />

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div

            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[250px] rounded-3xl bg-white shadow-md z-50 flex flex-col px-10 pt-20 pb-5"
          >

            <IoMdClose className="cursor-pointer absolute top-5 right-5 w-10 h-10" onClick={handleCloseMenu} />

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-10 mt-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-base leading-[100%] cursor-pointer ${isActive ? "font-semibold text-primary" : "font-medium hover:text-primary/90 "
                    }`
                  }
                  onClick={handleCloseMenu}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Button at the bottom */}
            <div className="mt-auto flex flex-col gap-8 ">
              <LanguageSelector />
              <Button text={"Schedule a Call"} className="w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

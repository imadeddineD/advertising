import React from "react";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { NavbarMenu } from "../data/navdata";
// import ResponsiveMenu from "./responsivenav";
import logo from "../assets/Mega-Art.png"
import ResponsiveMenu from "./Responsive";
// import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container flex justify-between items-center py-2 mx-auto">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img src={logo} alt="logo" width={100} />
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}> 
                    <a
                      href={`/${item.link}`}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          {/* <div className="hidden lg:block space-x-6">
            <button className="font-semibold"><a href="/auth/login">Sign in</a></button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 ">
              <a href="/auth/register">Register</a>
            </button>
          </div> */}
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
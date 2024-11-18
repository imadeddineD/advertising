import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../data/navdata";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden "
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl boxxx">
            <ul className="flex flex-col justify-center items-center gap-7">
            {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}> 
                    <a
                      href={`/${item.link}`}
                      className="inline-block text-black text-md font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* <div className="flex flex-col gap-4 justify-center items-center mt-8">
            <button className="font-semibold text-center text-secondary"><a href="/auth/login">Sign in</a></button>
            <button className="text-white bg-secondary font-semibold rounded-full px-4 py-2 w-[180px] flex justify-center items-center ">
              <a href="/auth/register">Register</a>
            </button>
          </div>  */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
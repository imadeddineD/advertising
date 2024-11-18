import React from "react";
import HeroImg from "../assets/sf1.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../utils/animate";

const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative mx-auto">
        {/* brand info */}
        <div className="flex flex-col justify-center py-8 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            {/* <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-secondary uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p> */}
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-3xl text-primary font-semibold lg:text-4xl !leading-tight"
            >
              مؤسسة عملاق الفن للإعلان الرقمي
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className=" text-secondary"
            >
حلول إعلانية مبتكرة بمنطقة القطيف
نرتقي بإعلاناتكم من خلال شبكتنا الواسعة من الشاشات الإعلانية عالية الجودة، لنضمن وصول رسالتكم إلى جمهوركم المستهدف بأفضل صورة.            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button className="primary-btn"><a href="/auth/register">ابدأ</a></button>
              <button className=" font-semibold">
                <a href="/about" className="flex justify-end items-center gap-2">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                انظر كيف يعمل
                </a>
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center pb-8">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[450px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
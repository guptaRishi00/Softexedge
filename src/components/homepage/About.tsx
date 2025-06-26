"use client";

import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  };

  const buttonTap = {
    scale: 0.95,
  };

  return (
    <div className="bg-[#11151C] w-full p-10 relative min-h-[1000px]">
      {/* Background decorative SVGs with subtle animation */}
      <Image
        src="/about-dot-shape.svg"
        alt="Decorative background pattern"
        width={1500}
        height={1500}
        className="object-cover  absolute top-0 left-[60%] transform -translate-x-1/2 z-0"
      />

      {/* Bottom decorative text with parallax effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0"
      >
        <Image
          src="/about-text.svg"
          alt="Decorative background text"
          width={1500}
          height={1500}
        />
      </motion.div>

      {/* Content area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute z-10 mt-8 top[-100px] flex justify-between gap-20 pr-10"
      >
        <div className="flex flex-col items-start justify-center gap-10">
          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-[#388BFF] tracking-wider font-medium z-10"
          >
            ABOUT OUR COMPANY
          </motion.p>

          {/* Main heading with gradient text animation */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 leading-tight tracking-tight"
          >
            We provide best web design <br />
            solution in city
          </motion.h1>

          {/* Description paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg leading-relaxed font-light max-w-2xl relative"
          >
            <span className="relative z-10">
              Digital marketing is the act of promoting and selling products and
              services by leveraging online marketing tactics such as social
              media marketing, search marketing, and email marketing. When you
              get down to it, digital marketing is simply marketing.
            </span>
          </motion.p>

          {/* Animated button */}
          <motion.button
            variants={fadeInUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="bg-[#388BFF] w-[30%] p-5 text-white font-medium flex items-center justify-center gap-5 relative overflow-hidden group"
          >
            {/* Button background hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#388BFF] to-[#2563eb] opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Get Started Now</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight />
            </motion.div>
          </motion.button>
        </div>

        {/* Image with entrance animation */}
        <motion.div
          variants={fadeInRight}
          className="relative z-10 top-[-200px] right-0"
        >
          <motion.div
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/about-img.png"
              alt="About Us Image"
              width={600}
              height={400}
              className="mt-10 rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

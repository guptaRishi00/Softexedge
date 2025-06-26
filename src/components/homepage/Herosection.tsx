"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-[#02050a] w-full h-screen overflow-hidden">
      {/* Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          fill
          src="/hero-bg-shape.svg"
          alt="Background shape"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Foreground Images */}
      <div className="absolute flex items-start w-full">
        <motion.div
          className="mt-8 md:mt-12 lg:mt-16 xl:mt-24"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              width={180}
              height={180}
              alt="Decorative image 1"
              src="/image1.png"
              className="relative -left-4 md:-left-6 lg:-left-8 w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-45 xl:h-45"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Image
              width={300}
              height={300}
              alt="Decorative image 2"
              src="/image2.png"
              className="relative left-20 md:left-32 lg:left-40 -top-4 md:-top-6 lg:-top-8"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Image
              width={170}
              height={170}
              alt="Decorative image 3"
              src="/image3.png"
              className="relative -top-2 md:-top-4 lg:-top-6 z-10 w-36 h-36 md:w-40 md:h-40 lg:w-42 lg:h-42 xl:w-43 xl:h-43"
            />
          </motion.div>
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          >
            <Image
              width={200}
              height={200}
              alt="Decorative image 4"
              src="/decor2.svg"
              className="relative -top-48 md:-top-56 lg:-top-64 xl:-top-64 -left-8 md:-left-12 lg:-left-12 w-40 h-40 md:w-48 md:h-48 lg:w-50 lg:h-50"
            />
          </motion.div>
        </motion.div>

        {/* Main Text Content */}
        <div className="z-10 relative w-full py-16 md:py-24 lg:py-32 xl:py-37 flex flex-col justify-start px-8 md:px-16 lg:px-24 xl:px-30">
          <motion.p
            className="text-white text-3xl md:text-4xl lg:text-5xl font-medium ml-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bridging You to
          </motion.p>

          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl xl:text-[145px] font-bold flex items-center relative">
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="shadow-lg relative z-10"
            >
              DIGITAL
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Image
                width={776}
                height={776}
                src="/gradient.png"
                alt="gradient"
                className="absolute -z-10"
              />
            </motion.span>
          </h1>

          <motion.p
            className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium ml-2 "
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            TOMORROW
          </motion.p>
        </div>
      </div>

      {/* Fixed Image4 positioning */}
      <motion.div
        className="absolute top-1/4 md:top-[29.5%] right-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
      >
        <Image
          width={700}
          height={700}
          alt="Hero image"
          src="/image4.png"
          className=""
        />
      </motion.div>
    </div>
  );
}

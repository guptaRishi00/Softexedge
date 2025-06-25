"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Herosection() {
  return (
    <div className="relative bg-[#02050a] w-full h-screen overflow-hidden">
      {/* Background Shape */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className=""
      >
        <Image
          fill
          src="/hero-bg-shape.svg"
          alt="Background shape"
          className="absolute object-cover "
        />
      </motion.div>

      {/* Foreground Images */}
      <div className="absolute flex items-start w-full ">
        <motion.div
          className="mt-30"
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
              className="relative left-[-30px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Image
              width={260}
              height={260}
              alt="Decorative image 2"
              src="/image2.png"
              className="relative left-40 top-[-25px]"
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
              className="relative top-[-15px] z-10"
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
              alt="Decorative image 3"
              src="/decor2.svg"
              className="relative top-[-257px] left-[-50px]"
            />
          </motion.div>
        </motion.div>
        <div className="z-10 relative w-full py-37 flex flex-col jsutify-start px-30 leading-30">
          <motion.p
            className="text-white text-5xl font-medium ml-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bridging You to
          </motion.p>
          <h1 className="text-white text-[145px] font-bold flex items-center relative">
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
                src={"/gradient.png"}
                alt="gradient"
                className="absolute -z-10"
              />
            </motion.span>
          </h1>
          <motion.p
            className="text-white  text-7xl font-medium ml-2 shadow-lg"
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
        className="absolute top-[28%] right-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
      >
        <Image
          width={600}
          height={600}
          alt="Hero image"
          src="/image4.png"
          className=""
        />
      </motion.div>
    </div>
  );
}

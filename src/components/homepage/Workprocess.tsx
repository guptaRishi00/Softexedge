"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {};

const Workprocess = (props: Props) => {
  const process = [
    {
      title: "Project Processing",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
      image: "/process-1.svg",
    },
    {
      title: "High Quality Products",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
      image: "/process-2.svg",
    },
    {
      title: "Huge Choice Products",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris..",
      image: "/process-3.svg",
    },
    {
      title: "Quality Finished",
      description: "Cursus euismod dictumst a non dis nisi sociosqu mauris.",
      image: "/process-4.svg",
    },
  ];

  // Refs for intersection observer
  const ref = useRef(null);
  const headerRef = useRef(null);
  const processRef = useRef(null);
  const imageRef = useRef(null);

  // useInView hooks
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isProcessInView = useInView(processRef, {
    once: true,
    margin: "-100px",
  });
  const isImageInView = useInView(imageRef, { once: true, margin: "-200px" });

  console.log(process[0].image);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      rotate: -180,
      scale: 0,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  // Enhanced scroll-triggered variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const backgroundImageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const bottomImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 80,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div
      className="relative bg-[#02050a] w-full h-full overflow-hidden -mt-20"
      ref={ref}
    >
      {/* Background Grid Animation */}
      <motion.div
        variants={backgroundImageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src="/grid.svg"
          alt="grid"
          width={600}
          height={800}
          className="absolute right-0 top-0 z-0"
        />
      </motion.div>

      <div className="relative z-10 pt-24 text-center flex flex-col items-center justify-start w-full h-full gap-10">
        {/* Header Section */}
        <div ref={headerRef}>
          <motion.p
            className="text-[#388BFF] tracking-wider font-medium"
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            WORK PROCESS
          </motion.p>

          <motion.h1
            className="text-white text-6xl font-bold mt-4"
            variants={titleVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            Follow 4 Easy Work Steps
          </motion.h1>
        </div>

        {/* Process Steps */}
        <motion.div
          ref={processRef}
          className="flex items-center justify-center w-full gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={isProcessInView ? "visible" : "hidden"}
        >
          {process.map((item, index) => (
            <motion.div
              className="flex flex-col items-start justify-center"
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="border-2 border-[#388BFF] rounded-full p-5 w-30 h-30 flex items-center justify-center cursor-pointer"
                whileHover={{
                  borderColor: "#60A5FA",
                  boxShadow: "0 0 30px rgba(56, 139, 255, 0.4)",
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                initial={{
                  boxShadow: "0 0 0px rgba(56, 139, 255, 0)",
                }}
                animate={{
                  boxShadow: isProcessInView
                    ? "0 0 15px rgba(56, 139, 255, 0.2)"
                    : "0 0 0px rgba(56, 139, 255, 0)",
                }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 0.8,
                }}
              >
                <div className="bg-[#11151C] ml-10 mt-2 p-16 rounded-full flex items-center justify-center relative">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{
                      rotate: 5,
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                    className="absolute w-12 h-12 flex items-center justify-center"
                  >
                    <Image
                      src={`${item.image}`}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="absolute"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h3
                className="text-white text-xl font-semibold mt-10"
                variants={textVariants}
              >
                {item.title}
              </motion.h3>

              <motion.p
                className="text-gray-400 text-sm mt-2 max-w-xs text-justify"
                variants={textVariants}
                transition={{ delay: 0.2 }}
                whileHover={{
                  color: "#94A3B8",
                  transition: { duration: 0.3 },
                }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Image */}
        <motion.div
          ref={imageRef}
          variants={bottomImageVariants}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src="/process-img.svg"
            alt="Decorative image"
            width={2000}
            height={2000}
            className="py-20 px-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Workprocess;

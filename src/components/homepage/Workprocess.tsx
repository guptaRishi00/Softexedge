"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
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
      className="relative bg-[#02050a] w-full h-full overflow-hidden -mt-20 mb-50"
      ref={ref}
    >
      {/* Background Grid Animation */}
      <motion.div
        variants={backgroundImageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden lg:block"
      >
        <div className="absolute right-0 top-0 z-0 w-[300px] h-[400px] md:w-[400px] md:h-[600px] lg:w-[600px] lg:h-[800px] bg-[url('/grid.svg')] bg-contain bg-no-repeat bg-right-top opacity-20" />
      </motion.div>

      <div className="relative z-10 pt-12 md:pt-16 lg:pt-24 text-center flex flex-col items-center justify-start w-full h-full gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="max-w-4xl mx-auto">
          <motion.p
            className="text-[#388BFF] tracking-wider font-medium text-sm md:text-base"
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            WORK PROCESS
          </motion.p>

          <motion.h1
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 md:mt-4 leading-tight"
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
          className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-4 lg:gap-8 mt-10 md:mt-16 lg:mt-20 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isProcessInView ? "visible" : "hidden"}
        >
          {process.map((item, index) => (
            <motion.div
              className="flex flex-col items-center lg:items-start justify-center w-full md:w-1/4 max-w-xs"
              key={index}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="border-2 border-[#388BFF] rounded-full p-3 md:p-4 lg:p-5 w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 flex items-center justify-center"
                  initial={{
                    boxShadow: "0 0 0px rgba(56, 139, 255, 0)",
                  }}
                  animate={{
                    boxShadow: isProcessInView
                      ? "0 0 15px rgba(56, 139, 255, 0.2)"
                      : "0 0 0px rgba(56, 139, 255, 0)",
                  }}
                  whileHover={{
                    borderColor: "#60A5FA",
                    boxShadow: "0 0 30px rgba(56, 139, 255, 0.4)",
                  }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    duration: 0.8,
                  }}
                />

                <motion.div
                  className="bg-[#11151C] lg:ml-4 lg:mt-2 p-8 md:p-8 lg:p-0 xl:p-10 rounded-full flex items-center justify-center absolute top-0 left-0"
                  whileHover={{
                    x: "calc(50% - 50%)",
                    y: "calc(50% - 50%)",
                    marginLeft: 0,
                    marginTop: 0,
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                    border: "2px solid #388BFF",
                    boxShadow: "0 0 30px rgba(56, 139, 255, 0.4)",
                    transition: {
                      duration: 0.3,
                      border: { delay: 0.2, duration: 0.1 },
                    },
                  }}
                >
                  <motion.div
                    variants={iconVariants}
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-white text-lg md:text-xl font-semibold mt-6 md:mt-8 lg:mt-10 text-center lg:text-start px-2"
                variants={textVariants}
              >
                {item.title}
              </motion.h3>

              <motion.p
                className="text-gray-400 text-sm md:text-base mt-2 md:mt-3 max-w-xs text-center lg:text-start px-2 leading-relaxed"
                variants={textVariants}
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
          className="w-full max-w-7xl mx-auto"
        >
          <img
            src="/process-img.svg"
            alt="Decorative image"
            className="w-full h-auto py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Workprocess;

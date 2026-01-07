import React from 'react'
import { motion } from 'framer-motion'

const ContactHero = () => {

    const bounceVariant = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, 10, -10, 0],
      y: [0, -5, 5, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };


  return (
    <section className="relative bg-[#7E364E] text-white py-20 px-6 text-center overflow-hidden">
          {/* Floating Dots Background */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full"
              animate={{
                y: [0, 15, 0],
                x: [-10, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
    
          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              variants={bounceVariant}
              initial="initial"
              animate="animate"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4"
            >
              Get In Touch With Us
            </motion.h2>
    
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-200"
            >
              For Special Services
            </motion.p>
          </div>
        </section>
  );
}

export default ContactHero

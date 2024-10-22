// full_web-storefront/src/modules/home/components/hero/index.tsx
"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedIcon from "./AnimatedIcon"
import iconData from "./iconData"
import { Region } from "@medusajs/medusa"

interface HeroProps {
  region: Region
  countryCode: string
}

const Hero: React.FC<HeroProps> = ({ region, countryCode }) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-24 relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Elementi di Sfondo Animati */}
      {iconData.map((icon, index) => (
        <AnimatedIcon
          key={index}
          Icon={icon.Icon}
          size={icon.size}
          className={icon.className}
          initial={icon.initial}
          animate={icon.animate}
          transition={icon.transition}
        />
      ))}

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-20">
        {/* Logo di Full Party */}
        <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="cursor-pointer"
          >
            <Image
              src="https://fullpartystorage.s3.amazonaws.com/logo_w.svg"
              alt="Full Party Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Testo e Pulsante con Sfondo Semi-Trasparente */}
        <div className="flex-1 text-center md:text-left bg-black bg-opacity-10 p-6 rounded-md backdrop-blur-md">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Festeggia con Stile!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Scopri una vasta gamma di costumi, decorazioni e accessori per rendere ogni festa indimenticabile. Che sia Natale, Carnevale o Halloween, abbiamo tutto ciò di cui hai bisogno!
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/prodotti" legacyBehavior>
              <a className="inline-block bg-white text-primary px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
                Esplora Ora
              </a>
            </Link>
          </motion.div>
        </div>
      </div>

  
    </section>
  )
}

export default Hero

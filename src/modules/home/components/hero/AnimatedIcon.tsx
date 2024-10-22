// full_web-storefront/src/modules/home/components/hero/AnimatedIcon.tsx

"use client"

import React from "react"
import { motion } from "framer-motion"

interface AnimatedIconProps {
  Icon: React.ComponentType<{ size?: number }>
  size?: number
  className?: string
  initial?: object
  animate?: object
  transition?: object
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  Icon,
  size = 24,
  className = "",
  initial = {},
  animate = {},
  transition = {},
}) => {
  return (
    <motion.div
    className={className}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={transition}
  >
      <Icon size={size} />
    </motion.div>
  )
}

export default AnimatedIcon

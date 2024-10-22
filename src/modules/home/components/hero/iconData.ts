// full_web-storefront/src/modules/home/components/hero/iconData.ts
"use client"
import { IconType } from "react-icons"
import { 
  FaRocket, 
  FaHeart, 
  FaGift, 
  FaUmbrellaBeach, 
  FaCloud, 
  FaStar, 
  FaLock, 
  FaSmile, 
  FaMusic, 
  FaBeer, 
  FaFire, 
  FaLeaf, 
  FaCandyCane,
  FaSnowflake,
  FaSun,
  FaMoon,
  FaTree,
  FaWind,
  FaSnowman,
  FaBolt,
  FaFireAlt,
  FaWater,
  FaSnowboarding,
  FaSkiing,
  FaGlassCheers,
  FaRegSmile,
  FaRegHeart,
  FaRegStar,
  FaRegGem
} from "react-icons/fa"
import { MdCelebration, MdLocalCafe, MdLocalPizza } from "react-icons/md"
import { GiHeartOrgan, GiPartyPopper, GiFireworkRocket, GiTreeDoor, GiSnowman } from "react-icons/gi"
import { IoMdBeer, IoMdHappy, IoMdSad } from "react-icons/io"
import { RiSunLine, RiMoonLine } from "react-icons/ri"

// Definisci il tipo per i dati delle icone
interface IconData {
  Icon: IconType
  size: number
  className: string
  initial: object
  animate: object
  transition: object
}
// Modificato per rendere le animazioni più movimentate
const iconData: IconData[] = [
    // **Angoli Superiori**
    {
      Icon: FaRocket,
      size: 32,
      className: "absolute top-0 left-0 m-4 opacity-40",
      initial: { opacity: 0, x: -150, y: -150 },
      animate: { opacity: 1, x: 150, y: 150, rotate: 360 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 10, ease: "easeInOut" },
    },
    {
      Icon: FaCloud,
      size: 28,
      className: "absolute top-0 right-0 m-4 opacity-40",
      initial: { opacity: 0, x: 120, y: -120, rotate: 0 },
      animate: { opacity: 1, x: -120, y: 120, rotate: 720 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 14, ease: "easeInOut" },
    },
    {
      Icon: FaSnowflake,
      size: 24,
      className: "absolute top-1/6 left-1/4 opacity-40",
      initial: { opacity: 0, scale: 0.3, x: -80, y: -80, rotate: 0 },
      animate: { opacity: 1, scale: 1.5, x: 80, y: 80, rotate: 360 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 18, ease: "easeInOut" },
    },
    {
      Icon: RiSunLine,
      size: 28,
      className: "absolute top-1/3 right-1/4 opacity-40",
      initial: { opacity: 0, y: -80, rotate: 0 },
      animate: { opacity: 1, y: 100, rotate: 360 },
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    },
    {
      Icon: RiSunLine,
      size: 28,
      className: "absolute top-1/3 left-3/4 opacity-40",
      initial: { opacity: 0, y: -100, rotate: 0 },
      animate: { opacity: 1, y: 120, rotate: 360 },
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    },
  
    // **Angoli Inferiori**
    {
      Icon: FaBolt,
      size: 24,
      className: "absolute bottom-0 left-0 m-4 opacity-40",
      initial: { opacity: 0, x: -120, y: 120, scale: 0.5 },
      animate: { opacity: 1, x: 120, y: -120, scale: 1.2, rotate: 180 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 12, ease: "easeInOut" },
    },
    {
      Icon: FaLock,
      size: 28,
      className: "absolute bottom-0 right-0 m-4 opacity-40",
      initial: { opacity: 0, x: 100, y: 100, scale: 0.6 },
      animate: { opacity: 1, x: -100, y: -100, scale: 1.3, rotate: 360 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 14, ease: "easeInOut" },
    },
    {
      Icon: FaMoon,
      size: 24,
      className: "absolute bottom-1/6 left-1/4 opacity-40",
      initial: { opacity: 0, scale: 0.5, x: -80, y: 80 },
      animate: { opacity: 1, scale: 1.5, x: 80, y: -80, rotate: 180 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 18, ease: "easeInOut" },
    },
    {
      Icon: RiMoonLine,
      size: 28,
      className: "absolute bottom-1/3 right-1/4 opacity-40",
      initial: { opacity: 0, rotate: 0 },
      animate: { opacity: 1, rotate: 720 },
      transition: { repeat: Infinity, duration: 22, ease: "linear" },
    },
    {
      Icon: RiMoonLine,
      size: 28,
      className: "absolute bottom-1/3 left-3/4 opacity-40",
      initial: { opacity: 0, rotate: 0 },
      animate: { opacity: 1, rotate: 720 },
      transition: { repeat: Infinity, duration: 22, ease: "linear" },
    },
  
    // **Centro**
    {
      Icon: FaHeart,
      size: 36,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50",
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1.4 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 16, ease: "easeInOut" },
    },
    {
      Icon: GiHeartOrgan,
      size: 24,
      className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50",
      initial: { opacity: 0, rotate: 0 },
      animate: { opacity: 1, rotate: 360 },
      transition: { repeat: Infinity, duration: 12, ease: "linear" },
    },
    {
      Icon: FaStar,
      size: 28,
      className: "absolute top-1/2 left-1/2 opacity-40 transform -translate-x-1/2 -translate-y-1/2",
      initial: { opacity: 0, scale: 0.5, x: -120, y: -120 },
      animate: { opacity: 1, scale: 1.5, x: 120, y: 120 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 14, ease: "easeInOut" },
    },
    {
      Icon: FaSmile,
      size: 32,
      className: "absolute top-1/2 left-1/2 opacity-40 transform -translate-x-1/2 -translate-y-1/2",
      initial: { opacity: 0, y: 120, scale: 0.8 },
      animate: { opacity: 1, y: -120, scale: 1.2 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 16, ease: "easeInOut" },
    },
    {
      Icon: FaRegSmile,
      size: 28,
      className: "absolute top-1/3 right-1/2 opacity-40 transform translate-x-1/2",
      initial: { opacity: 0, scale: 0.5, x: -100, y: 100 },
      animate: { opacity: 1, scale: 1.2, x: 100, y: -100 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 18, ease: "easeInOut" },
    },
    {
      Icon: FaRegHeart,
      size: 24,
      className: "absolute bottom-2/3 left-1/3 opacity-40",
      initial: { opacity: 0, rotate: 0 },
      animate: { opacity: 1, rotate: 360 },
      transition: { repeat: Infinity, duration: 20, ease: "linear" },
    },
    {
      Icon: FaRegStar,
      size: 28,
      className: "absolute top-2/3 right-1/4 opacity-40",
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: -100 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 14, ease: "easeInOut" },
    },
    {
      Icon: FaRegGem,
      size: 24,
      className: "absolute bottom-1/4 right-1/2 opacity-40 transform translate-x-1/2",
      initial: { opacity: 0, scale: 0.5, x: -160, y: 160 },
      animate: { opacity: 1, scale: 1.6, x: 160, y: -160 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 18, ease: "easeInOut" },
    },
  
    // **Lati**
    {
      Icon: FaGift,
      size: 24,
      className: "absolute bottom-1/3 right-1/2 transform translate-x-1/2 opacity-40",
      initial: { opacity: 0, x: 0, y: 100 },
      animate: { opacity: 1, y: -100 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 16, ease: "easeInOut" },
    },
    {
      Icon: FaMusic,
      size: 28,
      className: "absolute top-1/3 left-1/2 transform -translate-x-1/2 opacity-40",
      initial: { opacity: 0, x: 0, y: -100 },
      animate: { opacity: 1, y: 100 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 18, ease: "easeInOut" },
    },
    {
      Icon: FaBeer,
      size: 24,
      className: "absolute bottom-1/4 left-1/2 transform -translate-x-1/2 opacity-40",
      initial: { opacity: 0, x: -100, y: 100, rotate: 0 },
      animate: { opacity: 1, x: 100, y: -100, rotate: 360 },
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    },
    {
      Icon: FaFire,
      size: 28,
      className: "absolute top-2/3 right-1/3 opacity-40",
      initial: { opacity: 0, x: 150, y: -150, rotate: 0 },
      animate: { opacity: 1, x: -150, y: 150, rotate: 360 },
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    },
    {
      Icon: FaLeaf,
      size: 24,
      className: "absolute bottom-2/3 left-1/2 opacity-40 transform -translate-x-1/2",
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: -100 },
      transition: { repeat: Infinity, repeatType: "mirror", duration: 16, ease: "easeInOut" },
    }
  ];
  
  export default iconData;
  
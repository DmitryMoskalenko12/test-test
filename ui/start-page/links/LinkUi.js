'use client'
import { motion } from "framer-motion";

const LinkUi = ({clazz}) => {

  const initialGradient = 'linear-gradient(90deg, #47F4B6 0%, #4CF3B7 24.5%, #51EBC3 53%, #56E4CD 81%, #49F0DC 100%)';
  const reverseGradient = 'linear-gradient(90deg, #49F0DC 0%, #56E4CD 24.5%, #51EBC3 53%, #4CF3B7 81%, #47F4B6 100%)';

    const backgroundAnimation = {
      initial:{ background: initialGradient },
      hover: {
        background: reverseGradient,
        transition: { duration: 1 },
      },
      };

      const svgAnimation = {
        initial: {
          width: '24px',
          height: '24px',
        },
        hover: {
          width: '32px',
          height: '32px',
        }
      }

    return <motion.a  
            variants={backgroundAnimation}
            initial='initial'
            whileHover="hover"
            className={clazz} 
            href="#"
            >
            <span>Schedule a demo</span>
                <motion.svg variants={svgAnimation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.8259 17.8238L18.5429 13.1068C19.1519 12.4968 19.1529 11.5028 18.5429 10.8928L13.8249 6.17578L13.1179 6.88278L17.7349 11.4998H5.00088V12.4998H17.7359L13.1179 17.1168L13.8259 17.8238Z" fill="black"/>
                </motion.svg>
            </motion.a>
}

export default LinkUi;
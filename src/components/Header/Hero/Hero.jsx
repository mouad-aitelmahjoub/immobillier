import React from "react"
import { motion } from "framer-motion"
import "./hero.css"
import heroImg from "../../../assets/images/image.png"

export const Hero = () => {
  return (
    <div className="hero__container">
      <motion.img //
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 70, repeat: Infinity }}
        className="hero__img"
        src={heroImg}
      />

      <div className="hero__wrapper">
        <motion.h1 //
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="hero__title"
        >
          Wakil
        </motion.h1>
        <motion.h5 //
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="hero__subtitle"
        >
          immobillier
        </motion.h5>
        <motion.p //
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
          className="hero__description"
        >
          Pas mal de vous confrère nous font confiance ... faite comme eux et rejoignez nous
        </motion.p>
      </div>

      <a className="lien" href="#About">
        <motion.span //
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 1, duration: 3 }}
          className="hero__arrow__wrapper"
        >
          <motion.i
            animate={{ y: 10 }}
            transition={{
              delay: 3,
              duration: 3,
              type: "spring",
              stiffness: 500,
              yoyo: Infinity,
            }}
            className="fas hero__arrow__icon fa-chevron-down"
          ></motion.i>
        </motion.span>
      </a>
    </div>
  )
}

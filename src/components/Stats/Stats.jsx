import React from "react"
import "./stats.css"
import { motion } from "framer-motion"
import imgsl from "../../img/img6.jpg"

export const Stats = () => {
  return (
    <div className="stats__container" id="About">
      <motion.div //
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        initial={{ x: -300, opacity: 0 }}
        className="statsLeft"
      >
        <img className="statsImg" src={imgsl} />
      </motion.div>

      <motion.div //
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        initial={{ x: 300, opacity: 0 }}
        className="statsRight"
      >
        <h1 className="statsTitle">Pour rester leader demain, il faudra simplifier le travail de nos clients</h1>
        <p className="statsText">Si nous voulons continuer à nous développer, nous devons être capables de transformer la complexité en simplicité, et cela pour l'ensemble de nos clients mais aussi de nos collaborateurs. C'est impératif. Simplifier la vie de nos clients, c'est d'abord leur laisser le choix dans la façon de nous contacter, aux horaires qui sont les leurs, que ce soit par téléphone, mail ou directement sur notre site Nous sommes capables de vous fournir des rendez-vous de qualité selon vos critères et vos disponibilités , également vous donner la liberté de choisir l utilisation de notre logiciel de pige interne et le votre.. Simplifier la vie de nos clients, c'est aussi innover en permanence et les accompagner sur de nouveaux argumentaires afin de faire entrer le maximum des mandats Mandat sur mesure, s'engage dans un plan ambicieux, être à là fois, la première société de pige en france, et aussi la plus simple aux yeux de ses clients!</p>
        <div className="statsDataContainer">
          <div className=" dataWrap dataYear">
            <span className="data">+200</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-user-tie"></i>
              </span>
              <span className="word">Clients Satisfaits</span>
            </div>
          </div>
          <div className="dataWrap dataClient">
            <span className="data">+1500</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-star"></i>
              </span>
              <span className="word">Collaborateurs</span>
            </div>
          </div>
          <div className="dataWrap dataSolde">
            <span className="data">+350</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-check"></i>
              </span>
              <span className="word">Projets Réalisés</span>
            </div>
          </div>
          <div className="dataWrap dataHours">
            <span className="data">+1200</span>
            <div className="dataText">
              <span className="dataIcon">
                <i className="fas fa-phone"></i>
              </span>
              <span className="word">Heures D'appel</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

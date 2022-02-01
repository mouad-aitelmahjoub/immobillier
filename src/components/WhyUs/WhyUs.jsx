import "./why_us.css"
import relation from "../../assets/images/relation.jpg"
import agenda from "../../assets/images/agenda.jpg"
import specialist from "../../assets/images/specialist.jpg"
import union from "../../assets/images/union.png"
import calendar from "../../assets/images/calendar.png"
import partnership from "../../assets/images/partnership.png"

const WhyUs = () => {
  return (
    <div className="why_us">
      <div className="why_us__title">Pourquoi nous choisir ?</div>
      <div className="why_us__subtitle">
        <span> Wakil immobilier </span>
        vous propose ses services de pige immobilière et vous accompagne dans la performance et la régularité de vos résultats. <br />
        <p>Une équipe aux services des agents mandataires, formées à la théorie et à la pratique de votre métier! Rejoignez-nous pour un travail d'équipe!!</p>
      </div>

      {/* Cards */}

      <div className="why_us__stats">
        <div className="why_us__stats__item">
          <div className="why_us__stats__item__background">
            <img src={specialist} alt="" />
          </div>
          <div className="why_us__stats__item__content">
            <img src={union} alt="" />
            <span>Accompagnement sur-mesure</span>
            <br /> Parce que nous traitons chaque mandat de vente d'une manière spécifique et que nous sommes spécialisés en prospection immobilière, nous serons capables de vous apporter une solution adaptée afin d'augmenter votre prise de mandats
          </div>
        </div>
        <div className="why_us__stats__item">
          <div className="why_us__stats__item__background">
            <img src={agenda} alt="" />
          </div>
          <div className="why_us__stats__item__content">
            <img src={calendar} alt="" />
            <span>OPTIMISEZ VOTRE AGENDA</span>
            <br /> Pour chaque rendez-vous, Nous vous préparons des dates précises pour faciliter vos signatures de mandats.
          </div>
        </div>
        <div className="why_us__stats__item">
          <div className="why_us__stats__item__content">
            <img src={partnership} alt="" />
            <span>RELATION PRIVILÉGIÉE</span>
            <br /> Notre équipe s'occupe de votre prospection téléphonique afin de vous aider à booster votre activité.
          </div>
          <div className="why_us__stats__item__background">
            <img src={relation} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

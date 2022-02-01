import "./our_stats.css"
import CountUp from "react-countup"

const OurStats = () => {
  return (
    <div className="statistics">
      <div className="statistics__title">
        <h1>A chaque client, son conseiller</h1>
        <h4>Prendre le temps de connaitre vos futurs mandants avec la force de nos équipes !</h4>
      </div>
      <div className="statistics__data">
        <div className="statistics__item">
          <span>
            +<CountUp delay={0 + 0} end={200} duration={5} />
            <br />
          </span>
          <i className="far fa-smile-beam"></i> Clients Satisfaits
        </div>
        <div className="statistics__item">
          <span>
            +<CountUp delay={0 + 1} end={1500} duration={5} />
            <br />
          </span>
          <i className="fas fa-handshake"></i> Collaborateurs
        </div>
        <div className="statistics__item">
          <span>
            +<CountUp delay={0 + 2} end={350} duration={5} />
            <br />
          </span>
          <i className="fas fa-folder-open"></i> Projets Réalisés
        </div>
        <div className="statistics__item">
          <span>
            + <CountUp delay={0 + 3} end={1200} duration={5} />
            <br />
          </span>
          <i class="fas fa-phone-alt"></i> Heures D'appel
        </div>
      </div>
      <div className="statistics__closer">
        <h4>Nos qualités ce sont vos clés d'or :</h4>
        <ul>
          <li>
            <i className="fas fa-arrow-circle-right"></i> Pige réalisée par des professionnels de l'immobilier
          </li>
          <li>
            <i className="fas fa-arrow-circle-right"></i> Argumentaires sur-mesure
          </li>
          <li>
            <i className="fas fa-arrow-circle-right"></i> Critères individuels
          </li>
          <li>
            <i className="fas fa-arrow-circle-right"></i> Prospecteurs dédiés
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OurStats

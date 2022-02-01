import "./logo.css"
import LogoIcon from "./LogoIcon"

const Logo = () => {
  return (
    <a className="lien" href="#">
      <div className="logo">
        <LogoIcon />
        {/* 
        <div className="logo__text">
          <h1 className="logo__title">WAKIL</h1>
          <p className="logo__subtitle">immobilier</p>
        </div> */}
      </div>
    </a>
  )
}

export default Logo

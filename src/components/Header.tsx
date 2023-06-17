import logo from '../images/logo.png';

export const Header: React.FC = () => {
  return(
    <div className="header">
      <div className="header-nav">
        <a href="/" className="header-nav-item">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <a href="/" className="header-nav-item">
          Start
        </a>
        <a href="/" className="header-nav-item">
          Lösungen
        </a>
        <a href="/" className="header-nav-item">
          Kontakt
        </a>
        <a href="/" className="header-nav-item">
          Über uns
        </a>
        <a href="/" className="header-nav-item">
          Impressum
        </a>
      </div>
      <div className="header-quote">
        <p className="header-quote-text">Opportunities don't happen, you create them.<br />— Chris Grosser</p>
      </div>
    </div>
  )
}
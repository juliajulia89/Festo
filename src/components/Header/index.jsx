import { Link, useLocation } from 'react-router-dom'
import './styles.scss'
import logo from "../../assets/logo.png"
import IconMovies from "../../assets/icon-movies.png"
import IconSeries from "../../assets/icon-series.png"
import IconFilter from "../../assets/icon-filter.png"
import IconLogin from "../../assets/icon-login.png"

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className="header" id="top">
      <Link to="/">
        <img src={logo} alt="Dreadful Tomato" className="headerLogo" />
      </Link>

      {pathname === "/movies" || pathname === "/series" ? (
        <nav className="headerNav">
          <Link to="/movies">
            <div className="navContainer">
              <img
                src={IconMovies}
                alt="icon movies"
                className="navContainerIcon"
              />
              <span>Movies</span>
            </div>
          </Link>
          <Link to="/series">
            <div className="navContainer">
              <img
                src={IconSeries}
                alt="icon series"
                className="navContainerIcon"
              />
              <span>Series</span>
            </div>
          </Link>
          <div className="navContainer">
            <img
              src={IconFilter}
              alt="icon filter"
              className="navContainerIcon"
            />
            <span>Filters</span>
          </div>
        </nav>
      ) : (
        ""
      )}

      <div className="headerActions">
        <Link to="/" className="headerActionsLogin">
          Login{" "}
          <img
            src={IconLogin}
            alt="login icon"
          />
        </Link>
        <button className="button">Start your free trial</button>
      </div>
    </header>
  );
}

export default Header

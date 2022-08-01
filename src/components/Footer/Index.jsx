import './styles.scss'
import logo from "../../assets/logo.png"
import AppStore from "../../assets/app store.png"
import GooglePlay from "../../assets/google-play.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <img src={logo} alt="Dreadful Tomato" className="footerLogo" />
        <ul className="footerList">
          <li className="footerListItem">Home</li>
          <li className="footerListItem">Terms of Use</li>
          <li className="footerListItem">Legal Notices</li>
          <li className="footerListItem">Help</li>
          <li className="footerListItem">Mange Account</li>
        </ul>
      </div>
      <div className="footerBottom">
        <div className="footerApp">
          <img src={AppStore} alt="app store" className="footerAppImg" />
          <img
            src={GooglePlay}
            alt="google-play store"
            className="footerAppImg"
          />
        </div>
        <p className="footerCopyright">
          Copyright 2022 Tomato Streaming All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer

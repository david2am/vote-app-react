import './_footer.sass'

import facebookLogo from '../../../assets/facebook.png'
import twitterLogo from '../../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>

      <div className="footer__right">
        <p>Follow us</p>

        <div className="footer__right__logos">
          <img src={facebookLogo} alt="Facebook logo" /> <img src={twitterLogo} alt="Twitter logo" />
        </div>
        
      </div>
    </footer>
  )
}

export { Footer }
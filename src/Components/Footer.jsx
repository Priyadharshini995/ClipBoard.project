
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
      <footer>
        <a href="#" className="FooterLogo" alt="clipboard">
          <img src={"images/logo.svg"} alt="clipboard" />
        </a>
        <div className="FooterLinksWrapper">
          <ul>
            <li className="FooterLinksWrapper-Link">
              <a href="#">FAQs</a>
            </li>
            <li className="FooterLinksWrapper-Link">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li className="FooterLinksWrapper-Link">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="FooterLinksWrapper-Link">
              <a href="#">Press Kit</a>
            </li>
          </ul>
          <ul>
            <li className="FooterLinksWrapper-Link">
              <a href="#">Install Guide</a>
            </li>
          </ul>
          <ul className="FooterLinksWrapper-SocialIcons">
          <li className="FooterLinksWrapper-SocialIcon">
            <a href="#" alt="facebook" >
             <div className="socialIcon">
                  <FaFacebookSquare />
                </div>
            </a>
          </li>
          <li className="FooterLinksWrapper-SocialIcon">
            <a href="#" alt="twitter">
             <div  className="socialIcon">
                  <FaTwitter />
                </div>
             </a>
          </li>
          <li className="FooterLinksWrapper-SocialIcon">
            <a href="#" alt="instagram">
             <div  className="socialIcon">
                  <FaInstagram />
                </div>
              </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
  export default Footer
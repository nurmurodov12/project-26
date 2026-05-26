import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-top">
        <div className="footer-title">
          <h2>CERAMIQUE</h2>
          <p>
            Premium ceramic and porcelain tiles for architects and designers
            worldwide since 2009.
          </p>

          <div className="footer-top-social">
            <div>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div className="footer-infos">
          <div className="footer-info">
            <ul>
              <h3>Products</h3>

              <li>
                <a href="">Porcelain Tiles</a>
              </li>
              <li>
                <a href="">Ceramic Tiles</a>
              </li>
              <li>
                <a href="">Marble Collection</a>
              </li>
              <li>
                <a href="">Marble Collection</a>
              </li>
              <li>
                <a href="">Glass Mosaics</a>
              </li>
            </ul>
          </div>

          <div className="footer-info">
            <ul>
              <h3>Resources</h3>

              <li>
                <a href="">Tile Calculator</a>
              </li>
              <li>
                <a href="">Installation Guide</a>
              </li>
              <li>
                <a href="">Care & Maintenance</a>
              </li>
              <li>
                <a href="">Design Inspiration</a>
              </li>
              <li>
                <a href="">Technical Specs</a>
              </li>
            </ul>
          </div>

          <div className="footer-info">
            <ul>
              <h3>Contact</h3>

              <li>
                <i class="fa-solid fa-location-dot"></i>
                <a href="">123 Design Avenue, New York, NY 10001</a>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <a href="">+1 (555) 123-4567</a>
              </li>
              <li>
                <i class="fa-regular fa-envelope"></i>
                <a href="">info@ceramique.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2026 Ceramique. All rights reserved.</p>
        </div>

        <div className="footer-bottom-right">
          <ul>
            <li>
              <a href="">Privacy Policaly</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

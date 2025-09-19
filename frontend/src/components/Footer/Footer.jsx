import "./Footer.css";
import { FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Shop Section */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>Fermented Yeast Protein</li>
            <li>Protein Chips</li>
            <li>Chocolate Wafer</li>
            <li>Chocolate Peanut Butter Wafer</li>
            <li>Strawberry Wafer</li>
            <li>Cheese Wafer</li>
            <li>Variety Box</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Connect Now</li>
          </ul>
        </div>

        {/* Policy Section */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund & Returns</li>
            <li>Shipping Policy</li>
            <li>Employment Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p><FaPhoneAlt /> +91 9960929067 </p>
          <p><FaEnvelope /> example@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p> © {new Date().getFullYear()} The Good Habit. All rights reserved. </p>
            <div className="payments">
                <FaCcVisa className="payment-icon" />
                <FaCcMastercard className="payment-icon" />
                <FaCcAmex className="payment-icon" />
                <FaCcPaypal className="payment-icon" />
            </div>
      </div>
    </footer>
  );
}

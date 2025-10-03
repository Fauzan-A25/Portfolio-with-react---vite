import { memo } from 'react';
import { personalInfo, socialLinks, navLinks } from '../../../data/portfolioData';
import './Footer.css';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinksArray = Object.entries(socialLinks)
    .filter(([key]) => key !== 'email')
    .map(([platform, url]) => ({
      icon: `bi-${platform}`,
      url,
      label: platform.charAt(0).toUpperCase() + platform.slice(1),
    }));

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-section">
              <h3 className="footer-brand">{personalInfo.name}</h3>
              <p className="footer-description">
                {personalInfo.title} passionate about machine learning, analytics, 
                and creating innovative solutions to real-world problems.
              </p>
              <p className="footer-location">
                <i className="bi bi-geo-alt-fill"></i>
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-envelope"></i>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h4 className="footer-title">Follow Me</h4>
              <div className="footer-social">
                {socialLinksArray.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
              <div className="footer-newsletter">
                <p>Stay updated with my latest projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

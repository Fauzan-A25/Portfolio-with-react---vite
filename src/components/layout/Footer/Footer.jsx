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

          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <div className="footer-newsletter">
                <p>"Data is the new oil. But like oil, data is useless unless refined."</p>
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

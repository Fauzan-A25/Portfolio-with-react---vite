import { memo, useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { personalInfo, socialLinks } from '../../../data/portfolioData';
import './Contact.css';

const Contact = memo(() => {
  const [elementRef, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Location',
      value: personalInfo.location,
      link: null,
    },
  ];

  const socialLinksArray = Object.entries(socialLinks)
    .filter(([key]) => key !== 'email')
    .map(([platform, url]) => ({
      icon: `bi-${platform}`,
      url,
      label: platform.charAt(0).toUpperCase() + platform.slice(1),
    }));

  return (
    <section 
      id="contact" 
      ref={elementRef}
      className={`contact-section ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">Get In Touch</h2>
        <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">
          Have a project in mind? Let's work together to create something amazing
        </p>

        <div className="row">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="contact-info-container">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-text">
                Feel free to reach out through any of these channels. I'm always open 
                to discussing new projects and opportunities.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item glass-card">
                    <div className="contact-icon">
                      <i className={`bi ${info.icon}`}></i>
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinksArray.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  <i className={`bi ${formStatus.type === 'success' ? 'bi-check-circle' : 'bi-x-circle'}`}></i>
                  {formStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="modern-btn btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;

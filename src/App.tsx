import { useState } from "react";
import {
  Gamepad2,
  Menu,
  X,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  Headphones,
  Zap,
  ChevronDown,
  LogIn,
  UserPlus,
} from "lucide-react";

import sikkimHero from "./assets/sikkim-hero.png";
import sikkimLogo from "./assets/sikkim-logo.png";

const GAME_URL = "https://www.sikkimgg.cc/#/register?invitationCode=625312852844";

const features = [
  {
    icon: Gamepad2,
    title: "Multiple Games",
    text: "Explore a variety of digital games and entertainment options.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    text: "Enjoy a smooth experience across modern smartphones and devices.",
  },
  {
    icon: ShieldCheck,
    title: "Simple Experience",
    text: "A clean platform designed with an easy-to-use interface.",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "Get assistance whenever you need help with the platform.",
  },
];

const faqs = [
  {
    question: "What is Sikkim Game?",
    answer:
      "Sikkim Game is an online gaming platform that offers users access to various entertainment options, including color prediction games and other digital activities. The platform is designed with a simple interface, allowing players to register quickly and explore different game modes. Many users appreciate its easy navigation and mobile-friendly experience.",
  },
  {
    question: "Can I access it from my phone?",
    answer:
      "Yes. The platform is designed to work smoothly on modern mobile devices.",
  },
  {
    question: "Is the platform easy to use?",
    answer:
      "Yes. The interface is designed to keep navigation simple and straightforward.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <div className="brand-logo">
              <img src={sikkimLogo} alt="Sikkim Game" />
            </div>

            <div>
              <div className="brand-name">Sikkim Game</div>
              <div className="brand-subtitle">Gaming Platform</div>
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </nav>

          <a href={GAME_URL} className="nav-button">
            Visit Website
            <ArrowRight size={17} />
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-container">

            {/* REGISTER / LOGIN — ABOVE IMAGE */}
            <div className="top-auth-buttons">
              <a href={GAME_URL} className="top-register">
                <UserPlus size={18} />
                Register
                <ArrowRight size={16} />
              </a>

              <a href={GAME_URL} className="top-login">
                <LogIn size={18} />
                Login
              </a>
            </div>

            {/* HERO IMAGE */}
            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-top">
                  <span>SIKKIM</span>

                  <div className="online">
                    <span />
                    Online
                  </div>
                </div>

                <div className="hero-image-wrap">
                  <img
                    src={sikkimHero}
                    alt="Sikkim Game"
                    className="hero-image"
                  />
                </div>
              </div>

              <div className="floating-card floating-one">
                <ShieldCheck size={18} />
                <span>Secure Experience</span>
              </div>

              <div className="floating-card floating-two">
                <Smartphone size={18} />
                <span>Mobile Ready</span>
              </div>
            </div>

            {/* INTRO */}
            <div className="account-actions">
              <div className="account-heading">
                <span>WELCOME</span>

                <h1>
                  Start your
                  <strong> gaming journey.</strong>
                </h1>

                <p>
                  Access the platform through a simple and modern experience.
                </p>
              </div>

              <div className="quick-points">
                <span>
                  <Zap size={15} />
                  Fast Access
                </span>

                <span>
                  <Smartphone size={15} />
                  Mobile Ready
                </span>

                <span>
                  <Headphones size={15} />
                  Support
                </span>
              </div>
            </div>

            {/* EXPLORE */}
            <div className="explore-intro">
              <div className="section-label">
                EXPLORE THE PLATFORM
              </div>

              <h2>
                Everything you need,
                <span> in one place.</span>
              </h2>

              <p>
                Discover the platform features and digital entertainment
                experience by scrolling below.
              </p>

              <a href="#features" className="explore-button">
                Explore Features
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                PLATFORM FEATURES
              </div>

              <h2>
                Simple.
                <span> Fast. Accessible.</span>
              </h2>

              <p>
                A straightforward platform designed for a smooth digital
                gaming experience.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="feature-card" key={feature.title}>
                    <div className="feature-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.text}</p>

                    <div className="card-arrow">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div className="about-box">
              <div className="about-icon">
                <img src={sikkimLogo} alt="Sikkim Game" />
              </div>

              <div className="about-line" />

              <div className="about-mini">
                DIGITAL
                <strong>GAMING</strong>
              </div>
            </div>

            <div className="about-content">
              <div className="section-label">
                ABOUT THE PLATFORM
              </div>

              <h2>
                Built for a
                <span> simpler experience.</span>
              </h2>

              <p>
                Sikkim Game brings digital entertainment options together
                through a clean and accessible interface.
              </p>

              <p>
                Whether you are using a smartphone or desktop browser, the
                platform focuses on simple navigation and convenient access.
              </p>

              <div className="about-list">
                <div>
                  <ShieldCheck size={20} />
                  <span>Clean and simple interface</span>
                </div>

                <div>
                  <Smartphone size={20} />
                  <span>Designed for mobile devices</span>
                </div>

                <div>
                  <Headphones size={20} />
                  <span>Customer support available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <div>
                <div className="section-label">
                  GET STARTED
                </div>

                <h2>Ready to explore?</h2>

                <p>
                  Discover the platform and explore its available features.
                </p>
              </div>

              <a href="#features" className="primary-button">
                Explore Now
                <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq-section">
          <div className="container">
            <div className="section-heading faq-heading">
              <div className="section-label">FAQ</div>

              <h2>
                Frequently asked
                <span> questions.</span>
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq.question}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index ? null : index
                      )
                    }
                  >
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={20}
                      className={
                        openFaq === index ? "rotate" : ""
                      }
                    />
                  </button>

                  {openFaq === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-logo">
              <img src={sikkimLogo} alt="Sikkim Game" />
            </div>

            <div>
              <div className="brand-name">
                Sikkim Game
              </div>

              <div className="brand-subtitle">
                Gaming Platform
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </div>

          <p>© 2026 Sikkim Game. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
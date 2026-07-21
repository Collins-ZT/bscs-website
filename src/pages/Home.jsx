import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const BECOME_MEMBER_URL = "https://discord.gg/njSZFTrum";

function Home() {
  const [heroImageFailed, setHeroImageFailed] = useState(false);

  return (
    <div className="page">
      <Navbar transparent />

      <section className="hero hero-dark">
        <div className="hero-text">
          <p className="eyebrow">University of Windsor</p>
          <h1>Black Students in Computer Science</h1>
          <p className="hero-description">
            A community focused on connection, growth, leadership, and
            opportunity for students in tech.
          </p>

          <div className="hero-buttons">
            <a
              href={BECOME_MEMBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Become a Member
            </a>
          </div>
        </div>

        <div className="hero-image">
          {heroImageFailed ? (
            <span>Photo placeholder</span>
          ) : (
            <img
              src="/hero/IMG_7369.jpg"
              alt="BSCS community"
              onError={() => setHeroImageFailed(true)}
            />
          )}
        </div>
      </section>

      <main>
        <section className="mission-section">
          <p className="eyebrow">What We Do</p>
          <p className="mission-statement">
            BSCS exists to help Black students in Computer Science at the
            University of Windsor find community, build confidence, and access
            the mentorship and opportunities that turn a degree into a career in
            tech.
          </p>
          <Link to="/about" className="secondary-btn">
            Learn More
          </Link>
        </section>

        <section className="involved-section">
          <div className="involved-list">
            <div className="involved-item">
              <span className="involved-icon">🗓️</span>
              <div>
                <h3>Attend workshops, socials, and career events</h3>
                <p>
                  From resume reviews to game nights, there&apos;s always
                  something happening.
                </p>
              </div>
            </div>

            <div className="involved-item">
              <span className="involved-icon">🤝</span>
              <div>
                <h3>
                  Build real relationships with other Black students in tech
                </h3>
                <p>
                  Find your people — study partners, mentors, and lifelong
                  friends.
                </p>
              </div>
            </div>

            <div className="involved-item">
              <span className="involved-icon">💼</span>
              <div>
                <h3>Access mentorship and job opportunities</h3>
                <p>
                  Connect with alumni and industry partners working to open
                  doors in tech.
                </p>
              </div>
            </div>
          </div>

          <div className="involved-image">
            <img
              src="/events/bowling/IMG_1218.JPG"
              alt="BSCS members at a social event"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

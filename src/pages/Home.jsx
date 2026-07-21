import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const BECOME_MEMBER_URL = "REPLACE_ME_MEMBERSHIP_FORM_URL";

function Home() {
  const [heroImageFailed, setHeroImageFailed] = useState(false);

  return (
    <div className="page">
      <Navbar />

      <main>
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
                src="/images/hero/IMG_7369.jpg"
                alt="BSCS community"
                onError={() => setHeroImageFailed(true)}
              />
            )}
          </div>
        </section>

        <section className="home-preview-grid">
          <div className="preview-card">
            <h2>About</h2>
            <p>
              Learn more about BSCS, our mission, and the kind of community
              we’re building.
            </p>
            <Link to="/about" className="text-link">
              Go to About
            </Link>
          </div>

          <div className="preview-card">
            <h2>Events</h2>
            <p>
              Explore workshops, socials, networking events, and other upcoming
              opportunities.
            </p>
            <Link to="/events" className="text-link">
              Go to Events
            </Link>
          </div>

          <div className="preview-card">
            <h2>Team</h2>
            <p>
              Meet the students behind BSCS and the people helping shape the
              club.
            </p>
            <Link to="/team" className="text-link">
              Go to Team
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

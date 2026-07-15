import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LINKEDIN_URL = "https://linkedin.com/company/REPLACE_ME";

const events = [
  {
    title: "Resume & Interview Prep Workshop",
    date: "September 18, 2026",
    description:
      "A hands-on session covering resume reviews, mock interviews, and tips for breaking into tech.",
  },
  {
    title: "Alumni Networking Night",
    date: "October 3, 2026",
    description:
      "Connect with BSCS alumni working across software, data, and product roles at companies near and far.",
  },
  {
    title: "Welcome Back Social",
    date: "October 15, 2026",
    description:
      "Kick off the semester with games, food, and a chance to meet other BSCS members.",
  },
  {
    title: "Intro to Web Development Workshop",
    date: "November 5, 2026",
    description:
      "A beginner-friendly walkthrough of building your first website, no experience required.",
  },
  {
    title: "Tech Talk: Careers in AI",
    date: "November 20, 2026",
    description:
      "A panel of industry professionals share how they broke into AI and machine learning careers.",
  },
  {
    title: "End of Semester Celebration",
    date: "December 5, 2026",
    description:
      "Celebrating the semester's wins with the whole BSCS community before finals.",
  },
];

const VISIBLE_COUNT = 3;

function Events() {
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? events : events.slice(0, VISIBLE_COUNT);

  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header">
          <p className="eyebrow">Events</p>
          <h1>What We Host</h1>
          <p>
            From workshops to socials, BSCS creates spaces for students to
            learn, connect, and grow.
          </p>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn linkedin-btn"
          >
            Follow us on LinkedIn for event updates
          </a>
        </div>

        <div className="events-grid">
          {visibleEvents.map((event) => (
            <article className="info-card" key={event.title}>
              <p className="event-date">{event.date}</p>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </article>
          ))}
        </div>

        {events.length > VISIBLE_COUNT && (
          <div className="see-more-wrap">
            <button
              type="button"
              className="secondary-btn"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show less" : "See more events"}
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Events;

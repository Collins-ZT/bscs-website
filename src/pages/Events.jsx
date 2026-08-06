{/*import { useState } from "react";*/}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/UpcomingEvents";
import SlideShow from "../components/SlideShow";

const LINKEDIN_URL = "https://www.linkedin.com/company/uwindsor-bscs/posts/?feedView=all";

{/*const events = [
  {
    title: "Potluck",
    date: "April 21, 2026",
    description: "Yummy",
  },
  {
    title: "Career Sesh",
    date: "March 28, 2026",
    description: "Talk to tech guys",
  },
  {
    title: "Movie Night",
    date: "February 11, 2026",
    description: "movie",
  },
  {
    title: "Github Workshop",
    date: "January 27, 2026",
    description:
      "A beginner-friendly walkthrough of using GitHub, no experience required.",
  },
  {
    title: "Bowling Night",
    date: "November 19, 2025",
    description: "End-of-semester colla with NSBE",
  },
  {
    title: "Kickoff Event",
    date: "October 21st, 2025",
    description: "Our first event!",
  },
]; 

const VISIBLE_COUNT = 3;*/}

function Events() {
  {/*const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? events : events.slice(0, VISIBLE_COUNT);
  */}

  return (
    <div className="page">
      <Navbar />

      <main className="subpage">
        <div className="page-header-row">
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
          <UpcomingEvents />
        </div>

        <SlideShow />

        {/*<div className="events-grid">
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
        )} */}
      </main>

      <Footer />
    </div>
  );
}

export default Events;

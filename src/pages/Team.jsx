import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Team() {
  const members = [
    { role: "Co-President", name: "Ewa Olakunle" },
    { role: "Co-President", name: "Seun Samuel-Ipaye" },
    { role: "Vice President", name: "Sura Gaafar" },
    { role: "Events Lead", name: "Adedeji Adeboyejo" },
    { role: "Head of Technology", name: "Manzi Munyambo" },
    { role: "Treasurer", name: "Samuel Obawole" },
    { role: "Outreach Lead", name: "Nifemi Koleosho" },
    { role: "Strategy Lead", name: "Edima Essien" },
    { role: "Secretary", name: "Iyanuoluwa Adegboyega" },
    { role: "Head of Marketing and Communication", name: "Kalkidan Wubshet" },
  ];

  return (
    <div className="page">
      <Navbar />

      <main className="team-page">
        <section className="team-hero">
          <p className="eyebrow">Team</p>
          <h1>Meet the Team</h1>
          <p className="team-hero-text">
            The students working behind the scenes to build and grow BSCS.
          </p>
        </section>

        <section className="team-section">
          <div className="team-members-grid">
            {members.map((member) => (
              <article className="team-member-card" key={member.role}>
                <div className="team-member-photo">Photo</div>
                <div className="team-member-info">
                  <h2>{member.role}</h2>
                  <p>{member.name}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Team;

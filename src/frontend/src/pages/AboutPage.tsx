import { Link } from "@tanstack/react-router";

const TIMELINE = [
  {
    year: "1956",
    title: "University Founded",
    event:
      "Founded as Hansung College of Liberal Arts with three founding departments and 320 inaugural students.",
  },
  {
    year: "1978",
    title: "University Status",
    event:
      "Gained full university status and established the Graduate School of Arts and Sciences.",
  },
  {
    year: "2003",
    title: "International Campus",
    event:
      "Opened the International Research Campus, welcoming researchers and students from 40+ countries.",
  },
  {
    year: "2018",
    title: "Global Alliance",
    event:
      "Joined the Global Research University Alliance, connecting with 60 leading institutions worldwide.",
  },
];

const LEADERSHIP = [
  {
    role: "President",
    name: "Prof. Dr. Jae-won Kim",
    badge: "fa-landmark",
    bio: "Distinguished scholar in educational policy and international development with over 30 years of academic leadership.",
  },
  {
    role: "Provost",
    name: "Prof. Dr. Soo-yeon Park",
    badge: "fa-university",
    bio: "Former Dean of the Graduate School and award-winning researcher in applied linguistics and cognitive science.",
  },
  {
    role: "Dean of Research",
    name: "Dr. Min-jae Cho",
    badge: "fa-microscope",
    bio: "Pioneer in quantum materials research and founding director of the Advanced Materials Research Institute.",
  },
];

const VALUES = [
  {
    icon: "fa-shield-alt",
    label: "Integrity",
    text: "We uphold the highest ethical standards in scholarship, research, and community engagement.",
  },
  {
    icon: "fa-star",
    label: "Excellence",
    text: "We pursue mastery in all endeavors — demanding rigour, depth, and creative ambition.",
  },
  {
    icon: "fa-lightbulb",
    label: "Innovation",
    text: "We cultivate curiosity and bold thinking that challenges convention and drives progress.",
  },
  {
    icon: "fa-heart",
    label: "Inclusion",
    text: "We embrace diverse perspectives and ensure every voice is heard and valued on campus.",
  },
  {
    icon: "fa-globe",
    label: "Global Citizenship",
    text: "We prepare graduates to lead with empathy and responsibility in an interconnected world.",
  },
  {
    icon: "fa-hands-helping",
    label: "Service",
    text: "We believe the measure of a great university is the positive change it creates in society.",
  },
];

const STATS = [
  { num: "1956", label: "Year Founded" },
  { num: "32,000", label: "Students" },
  { num: "2,400", label: "Faculty Members" },
  { num: "200+", label: "Programs Offered" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="uni-page-hero">
        <div className="uni-container">
          <div className="uni-breadcrumb">
            <Link to="/">Home</Link>
            <span className="uni-breadcrumb-sep">/</span>
            <span>About</span>
          </div>
          <h1 className="uni-page-hero-title">About Hansung University</h1>
          <p className="uni-page-hero-text">
            A legacy of academic excellence, creative scholarship, and service
            to society — since 1956.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="uni-stats-bar" data-ocid="about.stats.section">
        <div className="uni-container">
          <div className="uni-stats-bar-grid">
            {STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-stats-bar-item"
                data-ocid={`about.stat.${i + 1}`}
              >
                <div className="uni-stats-bar-number">{s.num}</div>
                <div className="uni-stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="uni-section uni-section-light"
        data-ocid="about.mission.section"
        data-aos="fade-up"
      >
        <div className="uni-container">
          <h2 className="uni-section-title">Our Mission &amp; Vision</h2>
          <div className="uni-section-divider" />
          <div className="uni-grid-2">
            <div
              className="uni-card uni-card-padded"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="uni-card-icon-top">
                <i className="fa fa-bullseye" />
              </div>
              <h3 className="uni-card-heading">Mission</h3>
              <p className="uni-card-paragraph">
                To cultivate intellectually courageous leaders who contribute to
                a more just, sustainable, and innovative world through rigorous
                scholarship and engaged learning. We prepare graduates to serve
                their professions, communities, and humanity with creativity,
                empathy, and integrity.
              </p>
            </div>
            <div
              className="uni-card uni-card-padded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="uni-card-icon-top">
                <i className="fa fa-eye" />
              </div>
              <h3 className="uni-card-heading">Vision</h3>
              <p className="uni-card-paragraph">
                To be Asia's most respected liberal arts and research university
                — celebrated for transformative scholarship, an inclusive and
                vibrant community, and graduates who shape the future across
                every discipline and every continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="about.history.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Our History
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-timeline" data-ocid="about.timeline.list">
            {TIMELINE.map((item, i) => (
              <div
                key={String(i)}
                className="uni-timeline-item"
                data-ocid={`about.timeline.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
              >
                <div className="uni-timeline-year">{item.year}</div>
                <div className="uni-timeline-connector">
                  <div className="uni-timeline-dot" />
                  {i < TIMELINE.length - 1 && (
                    <div className="uni-timeline-line" />
                  )}
                </div>
                <div className="uni-timeline-content">
                  <h4 className="uni-timeline-title">{item.title}</h4>
                  <p className="uni-timeline-text">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        className="uni-section uni-section-light"
        data-ocid="about.leadership.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            University Leadership
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="about.leadership.list">
            {LEADERSHIP.map((leader, i) => (
              <div
                key={String(i)}
                className="uni-leader-card"
                data-ocid={`about.leader.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 120)}
              >
                <div className="uni-leader-avatar">
                  <i className={`fa ${leader.badge}`} />
                </div>
                <div className="uni-leader-role">{leader.role}</div>
                <h3 className="uni-leader-name">{leader.name}</h3>
                <p className="uni-leader-bio">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="about.values.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Core Values
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="about.values.list">
            {VALUES.map((v, i) => (
              <div
                key={String(i)}
                className="uni-icon-card"
                data-ocid={`about.value.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String((i % 3) * 100)}
              >
                <div className="uni-icon-card-icon">
                  <i className={`fa ${v.icon}`} />
                </div>
                <div className="uni-icon-card-title">{v.label}</div>
                <div className="uni-icon-card-text">{v.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="about.cta.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            Ready to Be Part of Our Story?
          </h2>
          <p
            className="uni-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join 32,000 students and 2,400 faculty members shaping a brighter
            future.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/admissions"
              className="uni-btn uni-btn-primary"
              data-ocid="about.apply.button"
            >
              Apply to Hansung
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

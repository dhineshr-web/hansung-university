import { Link } from "@tanstack/react-router";

const COLLEGES = [
  {
    icon: "fa-flask",
    name: "College of Arts & Sciences",
    programs: "42 Programs",
    desc: "The intellectual heart of Hansung — spanning natural sciences, humanities, social sciences, and the fine arts in a rigorous liberal arts tradition.",
  },
  {
    icon: "fa-microchip",
    name: "College of Engineering & Technology",
    programs: "28 Programs",
    desc: "Combining engineering fundamentals with emerging technologies in AI, robotics, sustainable systems, and data science.",
  },
  {
    icon: "fa-chart-line",
    name: "College of Business",
    programs: "18 Programs",
    desc: "Preparing innovative business leaders through case-based learning, global internships, and a vibrant entrepreneurship ecosystem.",
  },
  {
    icon: "fa-chalkboard-teacher",
    name: "College of Education",
    programs: "14 Programs",
    desc: "Developing outstanding educators and researchers who transform learning environments from early childhood through higher education.",
  },
  {
    icon: "fa-heartbeat",
    name: "College of Health Sciences",
    programs: "16 Programs",
    desc: "Training clinicians, researchers, and public health leaders through cutting-edge simulation labs and clinical partnerships.",
  },
  {
    icon: "fa-balance-scale",
    name: "College of Law & Public Policy",
    programs: "10 Programs",
    desc: "Equipping students with the analytical and advocacy skills to navigate complex legal systems and shape public institutions.",
  },
  {
    icon: "fa-graduation-cap",
    name: "Graduate School",
    programs: "72 Programs",
    desc: "Interdisciplinary master's and doctoral programs designed to push the boundaries of knowledge across every academic discipline.",
  },
];

const HIGHLIGHTS = [
  {
    icon: "fa-users",
    stat: "22",
    label: "Average Class Size",
    desc: "Small seminars and close faculty-student relationships define the Hansung academic experience.",
  },
  {
    icon: "fa-microscope",
    stat: "80%",
    label: "Research-Integrated Programs",
    desc: "Most undergraduate programs include a research component — from lab placements to capstone projects.",
  },
  {
    icon: "fa-handshake",
    stat: "500+",
    label: "Industry Partners",
    desc: "Corporate and government partnerships enable internships, joint research, and career placement across sectors.",
  },
];

const STATS = [
  { num: "200+", label: "Academic Programs" },
  { num: "2,400", label: "Faculty Members" },
  { num: "94%", label: "Research-Active Faculty" },
  { num: "7", label: "Colleges & Schools" },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="uni-page-hero">
        <div className="uni-container">
          <div className="uni-breadcrumb">
            <Link to="/">Home</Link>
            <span className="uni-breadcrumb-sep">/</span>
            <span>Academics</span>
          </div>
          <h1 className="uni-page-hero-title">Academics</h1>
          <p className="uni-page-hero-text">
            Hansung offers over 200 undergraduate and graduate programs across
            seven colleges — unified by intellectual rigour and a commitment to
            discovery.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="uni-stats-bar" data-ocid="academics.stats.section">
        <div className="uni-container">
          <div className="uni-stats-bar-grid">
            {STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-stats-bar-item"
                data-ocid={`academics.stat.${i + 1}`}
              >
                <div className="uni-stats-bar-number">{s.num}</div>
                <div className="uni-stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section
        className="uni-section uni-section-light"
        data-ocid="academics.intro.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            A World of Knowledge Awaits
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <p
            className="uni-intro-paragraph"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hansung offers over 200 undergraduate and graduate programs across
            seven colleges — from the fine arts and natural sciences to
            engineering, law, and public health. Every program is shaped by
            faculty who are active researchers, practising artists, or industry
            leaders, ensuring that academic study is always connected to
            real-world knowledge and innovation.
          </p>
        </div>
      </section>

      {/* Colleges Grid */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="academics.colleges.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Colleges &amp; Schools
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="academics.colleges.list">
            {COLLEGES.map((college, i) => (
              <div
                key={String(i)}
                className="uni-college-card"
                data-ocid={`academics.college.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String((i % 3) * 100)}
              >
                <div className="uni-college-card-icon">
                  <i className={`fa ${college.icon}`} />
                </div>
                <h3 className="uni-college-card-name">{college.name}</h3>
                <div className="uni-college-card-programs">
                  {college.programs}
                </div>
                <p className="uni-college-card-desc">{college.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section
        className="uni-section uni-section-light"
        data-ocid="academics.highlights.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Academic Highlights
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="academics.highlights.list">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={String(i)}
                className="uni-highlight-block"
                data-ocid={`academics.highlight.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 120)}
              >
                <div className="uni-highlight-block-icon">
                  <i className={`fa ${h.icon}`} />
                </div>
                <div className="uni-highlight-block-stat">{h.stat}</div>
                <h4 className="uni-highlight-block-label">{h.label}</h4>
                <p className="uni-highlight-block-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dean's Message */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="academics.dean.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            A Message from the Provost
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div
            className="uni-dean-quote"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="uni-dean-quote-mark">"</div>
            <blockquote className="uni-dean-quote-text">
              At Hansung, we believe that a truly great education is one that
              challenges you to think beyond disciplinary boundaries, to engage
              with the world's most pressing questions, and to develop the moral
              clarity to act on your convictions. Our faculty are not just
              teachers — they are mentors, collaborators, and guides who are as
              invested in your growth as you are.
            </blockquote>
            <div className="uni-dean-quote-attribution">
              <div className="uni-dean-avatar">
                <i className="fa fa-user-tie" />
              </div>
              <div>
                <div className="uni-dean-name">Prof. Dr. Soo-yeon Park</div>
                <div className="uni-dean-title">
                  Provost &amp; Vice President for Academic Affairs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Programs CTA */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="academics.cta.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            Explore All Programs
          </h2>
          <p
            className="uni-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Browse our complete catalog of 200+ undergraduate and graduate
            programs.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/admissions"
              className="uni-btn uni-btn-primary"
              data-ocid="academics.browse.button"
            >
              Browse All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

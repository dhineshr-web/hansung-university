import { Link } from "@tanstack/react-router";

const CENTERS = [
  {
    icon: "fa-leaf",
    name: "Institute for Sustainable Development",
    dept: "College of Natural Sciences",
    desc: "Interdisciplinary research on climate policy, renewable energy transitions, and sustainable urban planning in East Asia.",
  },
  {
    icon: "fa-microchip",
    name: "Center for AI & Data Science",
    dept: "College of Engineering & Technology",
    desc: "Advancing machine learning, neural systems, natural language processing, and human-centered AI applications.",
  },
  {
    icon: "fa-heartbeat",
    name: "Global Health Research Center",
    dept: "College of Health Sciences",
    desc: "Addressing global health inequities through epidemiological research, community health interventions, and policy advocacy.",
  },
  {
    icon: "fa-book-open",
    name: "Humanities & Social Innovation Lab",
    dept: "College of Arts & Sciences",
    desc: "Exploring the intersection of humanistic scholarship and social change — from cultural heritage to civic technology.",
  },
  {
    icon: "fa-atom",
    name: "Advanced Materials Research Institute",
    dept: "College of Engineering & Technology",
    desc: "Pioneering work in quantum materials, semiconductor fabrication, photonics, and next-generation energy storage.",
  },
];

const PROJECTS = [
  {
    title: "Carbon Neutrality Pathways for East Asian Megacities",
    researcher: "Prof. Dr. Choi Hae-ryun",
    funding: "Ministry of Environment, ₩14.2B",
    desc: "A five-year study modelling policy scenarios for achieving net-zero emissions in Seoul, Tokyo, and Beijing by 2050.",
  },
  {
    title: "Neural Correlates of Creative Decision-Making",
    researcher: "Prof. Dr. Lee Soo-min",
    funding: "National Research Foundation, ₩8.6B",
    desc: "Using fMRI imaging to map the cognitive architecture underlying artistic and entrepreneurial creative processes.",
  },
  {
    title: "Multilingual NLP for Low-Resource Asian Languages",
    researcher: "Prof. Dr. Yoon Ji-hyun",
    funding: "Samsung Research, ₩5.4B",
    desc: "Developing transformer-based language models for Korean dialects, Vietnamese, and Mongolian to improve digital access.",
  },
];

const NEWS = [
  {
    date: "Apr 14, 2026",
    title:
      "Hansung researchers publish breakthrough in perovskite solar cell efficiency",
    excerpt:
      "A team from the Advanced Materials Research Institute achieved a certified 32.1% power conversion efficiency — setting a new world record.",
  },
  {
    date: "Mar 28, 2026",
    title: "Global Health Center awarded WHO collaborative research grant",
    excerpt:
      "The ₩9.8B award will fund a three-year study on post-pandemic mental health interventions across Southeast Asia.",
  },
  {
    date: "Feb 5, 2026",
    title:
      "AI & Data Science Center launches open-source Korean language benchmark",
    excerpt:
      "The KorBench dataset has been adopted by leading AI labs globally as a standard evaluation framework for Korean NLP.",
  },
];

const STATS = [
  { num: "₩240B", label: "Annual Research Funding" },
  { num: "3,200", label: "Active Research Projects" },
  { num: "18,000", label: "Publications" },
  { num: "420", label: "Patents Filed" },
];

export default function ResearchPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="uni-page-hero">
        <div className="uni-container">
          <div className="uni-breadcrumb">
            <Link to="/">Home</Link>
            <span className="uni-breadcrumb-sep">/</span>
            <span>Research</span>
          </div>
          <h1 className="uni-page-hero-title">Research</h1>
          <p className="uni-page-hero-text">
            Pushing the frontiers of human knowledge — from quantum physics to
            global health, from AI to the creative arts.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="uni-stats-bar" data-ocid="research.stats.section">
        <div className="uni-container">
          <div className="uni-stats-bar-grid">
            {STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-stats-bar-item"
                data-ocid={`research.stat.${i + 1}`}
              >
                <div className="uni-stats-bar-number">{s.num}</div>
                <div className="uni-stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        className="uni-section uni-section-light"
        data-ocid="research.overview.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Research at Hansung
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div
            className="uni-research-overview"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="uni-research-overview-stats">
              {[
                {
                  icon: "fa-coins",
                  num: "₩240B",
                  label: "Annual Research Funding",
                },
                {
                  icon: "fa-file-alt",
                  num: "3,200",
                  label: "Research Projects",
                },
                { icon: "fa-book", num: "18,000", label: "Publications" },
                { icon: "fa-lightbulb", num: "420", label: "Patents" },
              ].map((item, i) => (
                <div
                  key={String(i)}
                  className="uni-research-overview-stat-item"
                >
                  <i className={`fa ${item.icon}`} />
                  <div className="uni-research-overview-stat-num">
                    {item.num}
                  </div>
                  <div className="uni-research-overview-stat-label">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="uni-research-overview-text">
              <p>
                Hansung University is one of Asia's leading research
                institutions, with ₩240 billion in annual research funding and
                more than 3,200 active projects spanning the natural sciences,
                engineering, social sciences, and humanities. Our researchers
                collaborate with governments, industry partners, and global
                universities to produce scholarship that addresses the world's
                most complex challenges.
              </p>
              <p>
                We invest in our researchers at every stage of their careers —
                from first-year graduate students to senior faculty — providing
                state-of-the-art facilities, generous seed funding, and a
                culture that rewards intellectual daring and interdisciplinary
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="research.centers.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Research Centers &amp; Institutes
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="research.centers.list">
            {CENTERS.map((center, i) => (
              <div
                key={String(i)}
                className="uni-research-center-card"
                data-ocid={`research.center.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String((i % 3) * 100)}
              >
                <div className="uni-research-center-icon">
                  <i className={`fa ${center.icon}`} />
                </div>
                <h3 className="uni-research-center-name">{center.name}</h3>
                <div className="uni-research-center-dept">{center.dept}</div>
                <p className="uni-research-center-desc">{center.desc}</p>
                <Link
                  to="/research"
                  className="uni-card-link"
                  data-ocid={`research.center.link.${i + 1}`}
                >
                  Visit Center <i className="fa fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="uni-section uni-section-light"
        data-ocid="research.projects.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Featured Research Projects
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="research.projects.list">
            {PROJECTS.map((project, i) => (
              <div
                key={String(i)}
                className="uni-project-card"
                data-ocid={`research.project.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
              >
                <div className="uni-project-card-top">
                  <span className="uni-tag">Featured Project</span>
                </div>
                <h3 className="uni-project-card-title">{project.title}</h3>
                <div className="uni-project-card-meta">
                  <span>
                    <i className="fa fa-user" /> {project.researcher}
                  </span>
                  <span>
                    <i className="fa fa-coins" /> {project.funding}
                  </span>
                </div>
                <p className="uni-project-card-desc">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research News */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="research.news.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Research News
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div
            className="uni-research-news-list"
            data-ocid="research.news.list"
            data-aos="fade-up"
          >
            {NEWS.map((item, i) => (
              <div
                key={String(i)}
                className="uni-research-news-item"
                data-ocid={`research.news.item.${i + 1}`}
              >
                <div className="uni-research-news-date">{item.date}</div>
                <div className="uni-research-news-body">
                  <h4 className="uni-research-news-title">{item.title}</h4>
                  <p className="uni-research-news-excerpt">{item.excerpt}</p>
                </div>
                <Link
                  to="/research"
                  className="uni-card-link"
                  data-ocid={`research.news.link.${i + 1}`}
                >
                  Read <i className="fa fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="research.cta.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            Partner With Our Researchers
          </h2>
          <p
            className="uni-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Collaborate with 2,400 faculty across 38 research centers — from
            discovery to real-world impact.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/about"
              className="uni-btn uni-btn-primary"
              data-ocid="research.partner.button"
            >
              Become a Research Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

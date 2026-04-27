import { Link } from "@tanstack/react-router";

const STUDY_ABROAD = [
  {
    region: "Asia Pacific",
    flag: "🌏",
    partners: "48 Partner Universities",
    types: ["Semester Exchange", "Summer Programs", "Research Visits"],
    color: "#1b3a5c",
  },
  {
    region: "Europe",
    flag: "🌍",
    partners: "36 Partner Universities",
    types: ["Dual Degree Programs", "Language Immersion", "Erasmus+ Network"],
    color: "#112540",
  },
  {
    region: "Americas",
    flag: "🌎",
    partners: "20 Partner Universities",
    types: ["Semester Exchange", "Global Internships", "Research Partnerships"],
    color: "#1a3050",
  },
];

const REQUIREMENTS = [
  "Minimum cumulative GPA of 2.8 (3.0 recommended for competitive programs)",
  "Completion of at least two semesters at Hansung before applying",
  "Proof of language proficiency for non-English destination countries",
  "Two letters of recommendation from Hansung faculty",
  "Personal statement outlining academic and cultural goals",
  "Valid passport with at least 18 months remaining validity",
];

const APP_TIMELINE = [
  {
    month: "Oct–Nov",
    action: "Attend International Programs information session",
  },
  {
    month: "Dec 1",
    action: "Exchange application opens on the student portal",
  },
  { month: "Jan 15", action: "Application deadline for spring placement" },
  {
    month: "Feb–Mar",
    action: "Review and interview with international advisor",
  },
  {
    month: "Apr 1",
    action: "Placement offers issued and confirmed by students",
  },
];

const PARTNERS = [
  {
    country: "South Korea",
    flag: "🇰🇷",
    unis: ["Korea University", "Yonsei University", "KAIST", "POSTECH"],
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    unis: ["Waseda University", "Keio University"],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    unis: ["LMU Munich", "Humboldt-Universität zu Berlin"],
  },
  { country: "France", flag: "🇫🇷", unis: ["Sciences Po Paris"] },
  {
    country: "United States",
    flag: "🇺🇸",
    unis: ["Columbia University", "University of Michigan"],
  },
];

const LANGUAGE_SERVICES = [
  {
    icon: "fa-language",
    title: "Korean Language Institute",
    desc: "Intensive Korean language courses at six levels, from beginner to advanced academic writing. Offered to incoming international students year-round.",
  },
  {
    icon: "fa-pen-nib",
    title: "English Academic Writing Center",
    desc: "One-on-one writing consultations, workshops on academic citation, and peer tutoring for all students writing in English.",
  },
  {
    icon: "fa-globe",
    title: "Translation Services",
    desc: "Certified translation and interpretation services for official documents, research materials, and intercultural communication support.",
  },
];

const STATS = [
  { num: "85", label: "Countries Represented" },
  { num: "104", label: "Partner Universities" },
  { num: "1,200", label: "Exchange Students / Year" },
  { num: "46", label: "Years of Global Programs" },
];

export default function InternationalPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="uni-page-hero">
        <div className="uni-container">
          <div className="uni-breadcrumb">
            <Link to="/">Home</Link>
            <span className="uni-breadcrumb-sep">/</span>
            <span>International</span>
          </div>
          <h1 className="uni-page-hero-title">International Programs</h1>
          <p className="uni-page-hero-text">
            Study, research, and connect across 85 countries — your world-class
            education without borders.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section
        className="uni-stats-bar"
        data-ocid="international.stats.section"
      >
        <div className="uni-container">
          <div className="uni-stats-bar-grid">
            {STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-stats-bar-item"
                data-ocid={`international.stat.${i + 1}`}
              >
                <div className="uni-stats-bar-number">{s.num}</div>
                <div className="uni-stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Programs */}
      <section
        className="uni-section uni-section-light"
        data-ocid="international.studyabroad.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Study Abroad Programs
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div
            className="uni-grid-3"
            data-ocid="international.studyabroad.list"
          >
            {STUDY_ABROAD.map((region, i) => (
              <div
                key={String(i)}
                className="uni-region-card"
                data-ocid={`international.region.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 120)}
              >
                <div
                  className="uni-region-card-header"
                  style={{ background: region.color }}
                >
                  <div className="uni-region-card-flag">{region.flag}</div>
                  <h3 className="uni-region-card-title">{region.region}</h3>
                  <div className="uni-region-card-partners">
                    {region.partners}
                  </div>
                </div>
                <div className="uni-region-card-body">
                  <ul className="uni-region-card-types">
                    {region.types.map((t) => (
                      <li key={t}>
                        <i className="fa fa-check-circle" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/admissions"
                    className="uni-btn uni-btn-outline-navy uni-btn-sm"
                    data-ocid={`international.region.apply.${i + 1}`}
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoming Exchange */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="international.incoming.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Incoming Exchange Students
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-2">
            <div data-aos="fade-right">
              <h3 className="uni-subheading">Welcome to Hansung</h3>
              <p className="uni-body-paragraph">
                We welcome over 1,200 exchange students from our global partner
                network each academic year. Our International Student Services
                team provides dedicated support from pre-arrival orientation
                through graduation — including housing assistance, visa
                guidance, and academic advising.
              </p>
              <p className="uni-body-paragraph">
                Exchange students have full access to Hansung's facilities,
                student organizations, and cultural programs. All credit earned
                is fully transferable to your home institution under our
                bilateral agreements.
              </p>
              <h4 className="uni-subheading-small">Eligibility Requirements</h4>
              <ul className="uni-checklist">
                {REQUIREMENTS.map((r, i) => (
                  <li key={String(i)}>
                    <i className="fa fa-check-circle" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <div
                className="uni-timeline-card"
                data-ocid="international.app_timeline.card"
              >
                <h4 className="uni-timeline-card-title">
                  <i className="fa fa-calendar-alt" /> Application Timeline
                </h4>
                {APP_TIMELINE.map((step, i) => (
                  <div
                    key={String(i)}
                    className="uni-timeline-card-step"
                    data-ocid={`international.timeline.step.${i + 1}`}
                  >
                    <div className="uni-timeline-card-step-month">
                      {step.month}
                    </div>
                    <div className="uni-timeline-card-step-action">
                      {step.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section
        className="uni-section uni-section-light"
        data-ocid="international.partners.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Partner Universities
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-partners-table-wrap" data-aos="fade-up">
            <table
              className="uni-partners-table"
              data-ocid="international.partners.table"
            >
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Partner Institutions</th>
                </tr>
              </thead>
              <tbody>
                {PARTNERS.map((p, i) => (
                  <tr
                    key={String(i)}
                    data-ocid={`international.partner.item.${i + 1}`}
                  >
                    <td className="uni-partners-country">
                      <span>{p.flag}</span>
                      <strong>{p.country}</strong>
                    </td>
                    <td className="uni-partners-unis">{p.unis.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="international.language.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Language &amp; Academic Support
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="international.language.list">
            {LANGUAGE_SERVICES.map((svc, i) => (
              <div
                key={String(i)}
                className="uni-icon-card"
                data-ocid={`international.language.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 120)}
              >
                <div className="uni-icon-card-icon">
                  <i className={`fa ${svc.icon}`} />
                </div>
                <div className="uni-icon-card-title">{svc.title}</div>
                <div className="uni-icon-card-text">{svc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="international.cta.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            International Office
          </h2>
          <p
            className="uni-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our International Programs Office is here to guide you every step of
            the way — from choosing a destination to returning home.
          </p>
          <div
            className="uni-contact-box"
            data-aos="fade-up"
            data-aos-delay="200"
            data-ocid="international.contact.box"
          >
            <div className="uni-contact-box-item">
              <i className="fa fa-envelope" />
              <span>global@hansung.ac.kr</span>
            </div>
            <div className="uni-contact-box-divider" />
            <div className="uni-contact-box-item">
              <i className="fa fa-phone" />
              <span>+82-2-760-4200</span>
            </div>
            <div className="uni-contact-box-divider" />
            <Link
              to="/admissions"
              className="uni-btn uni-btn-primary"
              data-ocid="international.apply.button"
            >
              Apply for Exchange
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

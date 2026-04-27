import { Link } from "@tanstack/react-router";
import { useState } from "react";

const PROGRAM_CARDS = [
  {
    icon: "fa-graduation-cap",
    title: "Undergraduate Programs",
    count: "82 Programs",
    desc: "Four-year degrees across arts, sciences, engineering, business, and education — designed for depth, versatility, and career readiness.",
  },
  {
    icon: "fa-user-graduate",
    title: "Graduate Programs",
    count: "48 Programs",
    desc: "Master's degrees that combine advanced coursework with original research, preparing specialists for academia and industry.",
  },
  {
    icon: "fa-microscope",
    title: "Doctoral Programs",
    count: "24 Programs",
    desc: "Research-intensive PhD pathways with full funding packages and access to world-class laboratories and archives.",
  },
  {
    icon: "fa-briefcase",
    title: "Professional Programs",
    count: "12 Programs",
    desc: "Evening and weekend programs in law, business administration, and public policy designed for working professionals.",
  },
];

const TIMELINE_STEPS = [
  {
    step: "01",
    icon: "fa-file-alt",
    title: "Submit Application",
    desc: "Complete the online application form via the Hansung Admissions Portal and pay the application fee.",
  },
  {
    step: "02",
    icon: "fa-folder-open",
    title: "Document Review",
    desc: "Our admissions committee reviews academic transcripts, test scores, letters of recommendation, and personal statement.",
  },
  {
    step: "03",
    icon: "fa-comments",
    title: "Interview",
    desc: "Shortlisted applicants are invited for an interview — conducted in-person or via video call for international students.",
  },
  {
    step: "04",
    icon: "fa-envelope-open",
    title: "Decision & Enrollment",
    desc: "Receive your decision within six weeks. Accepted students confirm enrollment by submitting a deposit and registration form.",
  },
];

const REQUIREMENTS = [
  {
    title: "Academic Transcripts",
    detail:
      "Official transcripts from all secondary and post-secondary institutions attended. Documents not in Korean or English must include a certified translation.",
  },
  {
    title: "Language Proficiency",
    detail:
      "TOPIK Level 3 or higher for Korean-medium programs; IELTS 6.5+ or TOEFL iBT 85+ for English-medium programs. Native speakers are exempt.",
  },
  {
    title: "Letters of Recommendation",
    detail:
      "Two letters from academic instructors or professional supervisors who can speak to your intellectual abilities and personal character.",
  },
  {
    title: "Personal Statement",
    detail:
      "A 600–800 word essay describing your academic interests, career goals, and reasons for choosing Hansung University.",
  },
  {
    title: "Application Fee",
    detail:
      "₩80,000 (domestic) or USD $60 (international). Fee waivers are available for applicants demonstrating financial hardship.",
  },
];

const DEADLINES = [
  { type: "Early Decision", date: "Nov 15", badge: "early" },
  { type: "Regular Decision", date: "Feb 1", badge: "regular" },
  { type: "Transfer Applications", date: "Mar 15", badge: "transfer" },
  { type: "International Students", date: "Jan 15", badge: "intl" },
];

const STATS = [
  { num: "4,200", label: "Applications Received" },
  { num: "28%", label: "Acceptance Rate" },
  { num: "1,450", label: "Students Enrolled" },
  { num: "85", label: "Countries Represented" },
];

export default function AdmissionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {/* Page Hero */}
      <div className="uni-page-hero">
        <div className="uni-container">
          <div className="uni-breadcrumb">
            <Link to="/">Home</Link>
            <span className="uni-breadcrumb-sep">/</span>
            <span>Admissions</span>
          </div>
          <h1 className="uni-page-hero-title">Admissions</h1>
          <p className="uni-page-hero-text">
            Your journey to Hansung begins here. Discover programs, deadlines,
            and everything you need to apply.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="uni-stats-bar" data-ocid="admissions.stats.section">
        <div className="uni-container">
          <div className="uni-stats-bar-grid">
            {STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-stats-bar-item"
                data-ocid={`admissions.stat.${i + 1}`}
              >
                <div className="uni-stats-bar-number">{s.num}</div>
                <div className="uni-stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section
        className="uni-section uni-section-light"
        data-ocid="admissions.programs.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Programs of Study
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-4" data-ocid="admissions.programs.list">
            {PROGRAM_CARDS.map((prog, i) => (
              <div
                key={String(i)}
                className="uni-program-card"
                data-ocid={`admissions.program.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 80)}
              >
                <div className="uni-program-card-icon">
                  <i className={`fa ${prog.icon}`} />
                </div>
                <h3 className="uni-program-card-title">{prog.title}</h3>
                <div className="uni-program-card-count">{prog.count}</div>
                <p className="uni-program-card-desc">{prog.desc}</p>
                <Link
                  to="/admissions"
                  className="uni-btn uni-btn-outline-navy uni-btn-sm"
                  data-ocid={`admissions.program.apply.${i + 1}`}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="admissions.timeline.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Application Process
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-process-timeline">
            {TIMELINE_STEPS.map((step, i) => (
              <div
                key={String(i)}
                className="uni-process-step"
                data-ocid={`admissions.step.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
              >
                <div className="uni-process-step-num">{step.step}</div>
                {i < TIMELINE_STEPS.length - 1 && (
                  <div className="uni-process-connector" />
                )}
                <div className="uni-process-step-icon">
                  <i className={`fa ${step.icon}`} />
                </div>
                <h4 className="uni-process-step-title">{step.title}</h4>
                <p className="uni-process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Accordion */}
      <section
        className="uni-section uni-section-light"
        data-ocid="admissions.requirements.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Application Requirements
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div
            className="uni-accordion"
            data-ocid="admissions.requirements.list"
            data-aos="fade-up"
          >
            {REQUIREMENTS.map((req, i) => (
              <div
                key={String(i)}
                className={`uni-accordion-item${openIndex === i ? " open" : ""}`}
                data-ocid={`admissions.requirement.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="uni-accordion-trigger"
                  onClick={() => toggle(i)}
                  data-ocid={`admissions.requirement.toggle.${i + 1}`}
                  aria-expanded={openIndex === i}
                >
                  <span className="uni-accordion-trigger-icon">
                    <i className="fa fa-check-circle" />
                  </span>
                  <span className="uni-accordion-trigger-label">
                    {req.title}
                  </span>
                  <span className="uni-accordion-trigger-chevron">
                    <i
                      className={`fa fa-chevron-${openIndex === i ? "up" : "down"}`}
                    />
                  </span>
                </button>
                <div
                  className="uni-accordion-body"
                  style={{ maxHeight: openIndex === i ? "200px" : "0" }}
                >
                  <div className="uni-accordion-body-inner">{req.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deadlines Table */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="admissions.deadlines.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Key Deadlines
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-deadlines-table-wrap" data-aos="fade-up">
            <table
              className="uni-deadlines-table"
              data-ocid="admissions.deadlines.table"
            >
              <thead>
                <tr>
                  <th>Application Type</th>
                  <th>Deadline</th>
                  <th>Decision Released</th>
                </tr>
              </thead>
              <tbody>
                {DEADLINES.map((d, i) => (
                  <tr
                    key={String(i)}
                    data-ocid={`admissions.deadline.item.${i + 1}`}
                  >
                    <td className="uni-deadline-type">
                      <span
                        className={`uni-deadline-badge uni-deadline-badge-${d.badge}`}
                      >
                        {d.type}
                      </span>
                    </td>
                    <td className="uni-deadline-date">{d.date}</td>
                    <td className="uni-deadline-decision">
                      {i === 0
                        ? "Dec 15"
                        : i === 1
                          ? "Mar 15"
                          : i === 2
                            ? "Apr 30"
                            : "Feb 28"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="admissions.contact.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            Questions About Admissions?
          </h2>
          <p
            className="uni-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our admissions team is here to guide you every step of the way.
          </p>
          <div
            className="uni-contact-box"
            data-aos="fade-up"
            data-aos-delay="200"
            data-ocid="admissions.contact.box"
          >
            <div className="uni-contact-box-item">
              <i className="fa fa-envelope" />
              <span>admissions@hansung.ac.kr</span>
            </div>
            <div className="uni-contact-box-divider" />
            <div className="uni-contact-box-item">
              <i className="fa fa-phone" />
              <span>+82-2-760-4000</span>
            </div>
            <div className="uni-contact-box-divider" />
            <Link
              to="/admissions"
              className="uni-btn uni-btn-primary"
              data-ocid="admissions.contact.button"
            >
              Contact Admissions Office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

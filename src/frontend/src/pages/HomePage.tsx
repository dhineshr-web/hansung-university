import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    bg: "#0d2035",
    title: "Shaping the Leaders of Tomorrow",
    subtitle: "Ranked among Asia's top universities for research excellence",
    cta1: { label: "Apply Now", to: "/admissions" },
    cta2: { label: "Explore Programs", to: "/academics" },
  },
  {
    bg: "#112540",
    title: "Where Discovery Meets Purpose",
    subtitle: "Over 120 research centers driving global innovation",
    cta1: { label: "Apply Now", to: "/admissions" },
    cta2: { label: "Explore Programs", to: "/academics" },
  },
  {
    bg: "#0a1e30",
    title: "Your Journey Begins Here",
    subtitle: "Join 32,000 students from 85 countries around the world",
    cta1: { label: "Apply Now", to: "/admissions" },
    cta2: { label: "Explore Programs", to: "/academics" },
  },
];

const NEWS = [
  {
    tag: "Research",
    date: "Mar 15, 2025",
    title: "Hansung Researchers Win National Science Award",
    excerpt:
      "The Department of Applied Sciences was recognized for breakthrough work in sustainable energy systems.",
  },
  {
    tag: "International",
    date: "Feb 28, 2025",
    title: "New International Exchange Program with European Universities",
    excerpt:
      "Over 200 students will benefit from the expanded exchange agreements with 15 partner institutions.",
  },
  {
    tag: "Rankings",
    date: "Feb 14, 2025",
    title: "Hansung Ranked 3rd in Graduate Employment Rate",
    excerpt:
      "Our career services and industry partnerships continue to deliver exceptional outcomes for graduates.",
  },
  {
    tag: "Campus",
    date: "Jan 22, 2025",
    title: "Campus Expansion: New Research Complex Breaking Ground",
    excerpt:
      "A state-of-the-art ₩80 billion research facility will open in 2026, housing 40 new laboratories.",
  },
];

const ANNOUNCEMENTS = [
  {
    tag: "Admissions",
    tagClass: "uni-notice-tag-admissions",
    title: "2025 Fall Application Portal Now Open",
    date: "Apr 1, 2025",
    detail:
      "The portal for 2025 Fall undergraduate and graduate admissions is now accepting applications. Deadline for priority consideration is June 15, 2025.",
  },
  {
    tag: "Academic",
    tagClass: "uni-notice-tag-academic",
    title: "Spring 2025 Final Examination Schedule Released",
    date: "Mar 28, 2025",
    detail:
      "The official final examination timetable for Spring 2025 has been published on the academic portal. Students are advised to check for any conflicts immediately.",
  },
  {
    tag: "Financial Aid",
    tagClass: "uni-notice-tag-aid",
    title: "Merit Scholarship Applications Close May 15",
    date: "Mar 20, 2025",
    detail:
      "Applications for merit-based scholarships for the 2025–26 academic year must be submitted through the financial aid portal by May 15, 2025.",
  },
  {
    tag: "Campus",
    tagClass: "uni-notice-tag-campus",
    title: "Library Hours Extended During Finals Week",
    date: "Mar 18, 2025",
    detail:
      "The main university library will operate 24 hours from May 10–24 during the finals period. Additional study spaces will be available in the East Wing.",
  },
  {
    tag: "Research",
    tagClass: "uni-notice-tag-research",
    title: "Call for Undergraduate Research Proposals 2025",
    date: "Mar 10, 2025",
    detail:
      "Undergraduate students are invited to submit research proposals for the 2025 Hansung Undergraduate Research Initiative. Funding available up to ₩5 million per project.",
  },
];

const RESEARCH_HIGHLIGHTS = [
  {
    icon: "fa-bolt",
    title: "Sustainable Energy Systems",
    desc: "Our engineers are developing next-generation photovoltaic cells with 40% efficiency ratings.",
    dept: "Engineering",
  },
  {
    icon: "fa-brain",
    title: "AI & Cognitive Computing",
    desc: "Interdisciplinary research combining neuroscience and machine learning to advance human-computer interaction.",
    dept: "Computer Science",
  },
  {
    icon: "fa-heartbeat",
    title: "Global Health Policy",
    desc: "Partnering with WHO to develop evidence-based policies improving healthcare access in 30+ countries.",
    dept: "Public Health",
  },
];

const ADMISSIONS_STATS = [
  { num: "32,000", label: "Students" },
  { num: "85", label: "Countries" },
  { num: "200+", label: "Programs" },
  { num: "95%", label: "Employment Rate" },
];

const ADMISSIONS_CTAS = [
  { icon: "fa-pen", label: "Apply Now", to: "/admissions" },
  { icon: "fa-envelope", label: "Request Info", to: "/admissions" },
  { icon: "fa-map", label: "Virtual Tour", to: "/admissions" },
  { icon: "fa-question-circle", label: "FAQs", to: "/admissions" },
];

const CAMPUS_LIFE = [
  {
    icon: "fa-users",
    title: "Student Organizations",
    desc: "120+ clubs spanning arts, sports, academic societies, and community service.",
    to: "/campuslife",
  },
  {
    icon: "fa-trophy",
    title: "Athletics & Recreation",
    desc: "State-of-the-art facilities including an Olympic pool, climbing wall, and 8 sports courts.",
    to: "/campuslife",
  },
  {
    icon: "fa-palette",
    title: "Arts & Culture",
    desc: "Annual festivals, gallery exhibitions, and a 2,000-seat performing arts theater.",
    to: "/campuslife",
  },
];

const GLOBAL_REGIONS = [
  { icon: "fa-globe-asia", region: "Asia Pacific", partners: 28 },
  { icon: "fa-landmark", region: "Europe", partners: 42 },
  { icon: "fa-university", region: "Americas", partners: 19 },
  { icon: "fa-handshake", region: "Middle East & Africa", partners: 15 },
];

const EVENTS = [
  {
    month: "APR",
    day: "15",
    title: "Open Campus Day",
    time: "10:00 AM – 4:00 PM",
    location: "Main Campus",
    desc: "Explore departments, meet faculty, and experience campus life firsthand.",
  },
  {
    month: "MAY",
    day: "03",
    title: "Research Symposium 2025",
    time: "9:00 AM",
    location: "Grand Hall",
    desc: "Annual gathering of faculty and students presenting breakthrough research.",
  },
  {
    month: "MAY",
    day: "20",
    title: "International Student Welcome Fair",
    time: "2:00 PM",
    location: "Student Union",
    desc: "Meet fellow international students and connect with support services.",
  },
];

const QUICK_LINKS = [
  { icon: "fa-graduation-cap", label: "Admissions", to: "/admissions" },
  { icon: "fa-book-open", label: "Academics", to: "/academics" },
  { icon: "fa-flask", label: "Research", to: "/research" },
  { icon: "fa-book", label: "Library", to: "/" },
  { icon: "fa-user-graduate", label: "Student Portal", to: "/" },
  { icon: "fa-globe", label: "International", to: "/international" },
  { icon: "fa-running", label: "Athletics", to: "/campuslife" },
  { icon: "fa-hands-helping", label: "Alumni", to: "/" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const expandedRef = useRef<Set<number>>(new Set());
  const announcementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  function toggleAnnouncement(i: number) {
    const detail = announcementRefs.current[i];
    if (!detail) return;
    if (expandedRef.current.has(i)) {
      expandedRef.current.delete(i);
      detail.style.maxHeight = "0";
      detail.style.opacity = "0";
    } else {
      expandedRef.current.add(i);
      detail.style.maxHeight = `${detail.scrollHeight}px`;
      detail.style.opacity = "1";
    }
  }

  return (
    <>
      {/* ── HERO SLIDER ─────────────────────────────────── */}
      <section className="uni-hero" data-ocid="hero.section">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          loop
          className="uni-hero-swiper"
        >
          {HERO_SLIDES.map((slide, i) => (
            <SwiperSlide key={String(i)} data-ocid={`hero.slide.${i + 1}`}>
              <div className="uni-hero-slide" style={{ background: slide.bg }}>
                <div className="uni-hero-overlay" />
                <div className="uni-hero-content">
                  <h1 className="uni-hero-title">{slide.title}</h1>
                  <p className="uni-hero-subtitle">{slide.subtitle}</p>
                  <div className="uni-hero-btns">
                    <Link
                      to={slide.cta1.to}
                      className="uni-btn uni-btn-primary"
                      data-ocid={`hero.apply.button.${i + 1}`}
                    >
                      {slide.cta1.label}
                    </Link>
                    <Link
                      to={slide.cta2.to}
                      className="uni-btn uni-btn-outline"
                      data-ocid={`hero.explore.button.${i + 1}`}
                    >
                      {slide.cta2.label}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ── LATEST NEWS ─────────────────────────────────── */}
      <section
        className="uni-section uni-section-light"
        data-ocid="news.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Latest News</h2>
            <p className="uni-section-subtitle">
              Stay informed with the latest from Hansung University
            </p>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-grid-2" data-ocid="news.list">
            {NEWS.map((item, i) => (
              <article
                key={String(i)}
                className="uni-news-card"
                data-aos="fade-up"
                data-aos-delay={String(i * 80)}
                data-ocid={`news.item.${i + 1}`}
              >
                <div className="uni-news-card-strip" />
                <div className="uni-news-card-body">
                  <div className="uni-news-card-meta">
                    <span className="uni-news-tag">{item.tag}</span>
                    <span className="uni-news-date">
                      <i className="fa fa-calendar-alt" /> {item.date}
                    </span>
                  </div>
                  <h3 className="uni-news-title">{item.title}</h3>
                  <p className="uni-news-excerpt">{item.excerpt}</p>
                  <span className="uni-news-readmore">
                    Read More <i className="fa fa-arrow-right" />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="uni-section-cta">
            <Link
              to="/"
              className="uni-btn uni-btn-outline-navy"
              data-ocid="news.view_all.button"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* ── ANNOUNCEMENTS ───────────────────────────────── */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="notices.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Notices &amp; Announcements</h2>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-notices-list" data-ocid="notices.list">
            {ANNOUNCEMENTS.map((item, i) => (
              <div
                key={String(i)}
                data-aos="fade-up"
                data-aos-delay={String(i * 60)}
              >
                <button
                  type="button"
                  className="uni-notice-row"
                  onClick={() => toggleAnnouncement(i)}
                  data-ocid={`notices.item.${i + 1}`}
                  aria-expanded={expandedRef.current.has(i)}
                >
                  <span className={`uni-notice-tag ${item.tagClass}`}>
                    {item.tag}
                  </span>
                  <span className="uni-notice-title">{item.title}</span>
                  <span className="uni-notice-date">{item.date}</span>
                  <i className="fa fa-chevron-right uni-notice-arrow" />
                </button>
                <div
                  className="uni-notice-detail"
                  ref={(el) => {
                    announcementRefs.current[i] = el;
                  }}
                >
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="uni-section-cta">
            <Link
              to="/"
              className="uni-btn uni-btn-outline-navy uni-btn-sm"
              data-ocid="notices.view_all.button"
            >
              All Announcements
            </Link>
          </div>
        </div>
      </section>

      {/* ── RESEARCH HIGHLIGHTS ─────────────────────────── */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="research.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Research at Hansung</h2>
            <p className="uni-section-subtitle">
              Advancing knowledge across disciplines
            </p>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-grid-3" data-ocid="research.list">
            {RESEARCH_HIGHLIGHTS.map((item, i) => (
              <div
                key={String(i)}
                className="uni-research-card"
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                data-ocid={`research.item.${i + 1}`}
              >
                <div className="uni-research-card-bar" />
                <div className="uni-research-card-icon">
                  <i className={`fa ${item.icon}`} />
                </div>
                <h3 className="uni-research-card-title">{item.title}</h3>
                <p className="uni-research-card-desc">{item.desc}</p>
                <span className="uni-research-dept">
                  <i className="fa fa-building" /> {item.dept}
                </span>
                <Link
                  to="/research"
                  className="uni-btn uni-btn-outline-gold uni-btn-sm"
                  data-ocid={`research.learn_more.button.${i + 1}`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS ──────────────────────────────────── */}
      <section
        className="uni-section uni-section-light"
        data-ocid="admissions.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Begin Your Hansung Journey</h2>
            <p className="uni-section-subtitle">
              Applications are now open for the 2025–26 academic year
            </p>
            <div className="uni-section-divider" />
          </div>

          <div
            className="uni-admissions-stats-row"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {ADMISSIONS_STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-admissions-stat-block"
                data-ocid={`admissions.stat.${i + 1}`}
              >
                <div className="uni-admissions-stat-num">{s.num}</div>
                <div className="uni-admissions-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div
            className="uni-grid-4 uni-admissions-cta-grid"
            data-ocid="admissions.cta.list"
          >
            {ADMISSIONS_CTAS.map((cta, i) => (
              <Link
                key={String(i)}
                to={cta.to}
                className="uni-admissions-cta-card"
                data-aos="fade-up"
                data-aos-delay={String(i * 80)}
                data-ocid={`admissions.cta.${i + 1}`}
              >
                <div className="uni-admissions-cta-icon">
                  <i className={`fa ${cta.icon}`} />
                </div>
                <span className="uni-admissions-cta-label">{cta.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE ─────────────────────────────────── */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="campuslife.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Life at Hansung</h2>
            <p className="uni-section-subtitle">
              A vibrant community that extends beyond the classroom
            </p>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-grid-3" data-ocid="campuslife.list">
            {CAMPUS_LIFE.map((item, i) => (
              <div
                key={String(i)}
                className="uni-campus-card"
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                data-ocid={`campuslife.item.${i + 1}`}
              >
                <div className="uni-campus-card-img-area">
                  <i className={`fa ${item.icon}`} />
                </div>
                <div className="uni-campus-card-body">
                  <h3 className="uni-campus-card-title">{item.title}</h3>
                  <p className="uni-campus-card-desc">{item.desc}</p>
                  <Link
                    to={item.to}
                    className="uni-card-link"
                    data-ocid={`campuslife.link.${i + 1}`}
                  >
                    Learn More <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL PROGRAMS ─────────────────────────────── */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="global.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">A World of Opportunities</h2>
            <p className="uni-section-subtitle">
              Connecting Hansung to the world
            </p>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-grid-4" data-ocid="global.regions.list">
            {GLOBAL_REGIONS.map((r, i) => (
              <div
                key={String(i)}
                className="uni-global-region-card"
                data-aos="fade-up"
                data-aos-delay={String(i * 80)}
                data-ocid={`global.region.${i + 1}`}
              >
                <div className="uni-global-region-icon">
                  <i className={`fa ${r.icon}`} />
                </div>
                <h3 className="uni-global-region-title">{r.region}</h3>
                <p className="uni-global-region-count">{r.partners} partners</p>
                <Link
                  to="/international"
                  className="uni-global-region-explore"
                  data-ocid={`global.explore.link.${i + 1}`}
                >
                  Explore <i className="fa fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
          <p className="uni-global-footer-text" data-aos="fade-up">
            Join over 1,200 students studying abroad each year.
          </p>
        </div>
      </section>

      {/* ── EVENTS ──────────────────────────────────────── */}
      <section
        className="uni-section uni-section-light"
        data-ocid="events.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Upcoming Events</h2>
            <p className="uni-section-subtitle">Mark your calendar</p>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-grid-3" data-ocid="events.list">
            {EVENTS.map((evt, i) => (
              <div
                key={String(i)}
                className="uni-event-card"
                data-aos="fade-up"
                data-aos-delay={String(i * 90)}
                data-ocid={`events.item.${i + 1}`}
              >
                <div className="uni-event-date-block">
                  <span className="uni-event-month">{evt.month}</span>
                  <span className="uni-event-day">{evt.day}</span>
                </div>
                <div className="uni-event-card-body">
                  <h3 className="uni-event-card-title">{evt.title}</h3>
                  <div className="uni-event-card-meta">
                    <span>
                      <i className="fa fa-clock" /> {evt.time}
                    </span>
                    <span>
                      <i className="fa fa-map-marker-alt" /> {evt.location}
                    </span>
                  </div>
                  <p className="uni-event-card-desc">{evt.desc}</p>
                  <button
                    type="button"
                    className="uni-btn uni-btn-primary uni-btn-sm"
                    data-ocid={`events.register.button.${i + 1}`}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="uni-section-cta">
            <Link
              to="/"
              className="uni-btn uni-btn-outline-navy"
              data-ocid="events.view_all.button"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK ACCESS ────────────────────────────────── */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="quickaccess.section"
      >
        <div className="uni-container">
          <div data-aos="fade-up">
            <h2 className="uni-section-title">Quick Links</h2>
            <div className="uni-section-divider" />
          </div>
          <div className="uni-quick-access" data-ocid="quickaccess.list">
            {QUICK_LINKS.map((ql, i) => (
              <Link
                key={String(i)}
                to={ql.to}
                className="uni-quick-item"
                data-aos="fade-up"
                data-aos-delay={String(i * 50)}
                data-ocid={`quickaccess.item.${i + 1}`}
              >
                <div className="uni-quick-item-icon">
                  <i className={`fa ${ql.icon}`} />
                </div>
                <span className="uni-quick-item-label">{ql.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

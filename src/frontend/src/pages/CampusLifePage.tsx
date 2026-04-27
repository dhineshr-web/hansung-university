import { Link } from "@tanstack/react-router";

const ORG_CATEGORIES = [
  { icon: "fa-book", label: "Academic Societies" },
  { icon: "fa-globe-asia", label: "Cultural Clubs" },
  { icon: "fa-running", label: "Sports Teams" },
  { icon: "fa-music", label: "Arts & Performance" },
  { icon: "fa-hands-helping", label: "Community Service" },
  { icon: "fa-fist-raised", label: "Political & Social" },
  { icon: "fa-laptop-code", label: "Tech & Innovation" },
  { icon: "fa-praying-hands", label: "Religious & Spiritual" },
];

const ATHLETICS = [
  {
    icon: "fa-trophy",
    title: "Intercollegiate Sports",
    stat: "18 Teams",
    desc: "Compete at national level in basketball, swimming, athletics, football, and more with full athletic scholarship support.",
  },
  {
    icon: "fa-dumbbell",
    title: "Recreational Facilities",
    stat: "World-Class",
    desc: "Olympic-size pool, climbing walls, yoga studios, tennis courts, and a fully equipped strength-and-conditioning gym.",
  },
  {
    icon: "fa-users",
    title: "Intramural Leagues",
    stat: "Open to All",
    desc: "Friendly competitions in 12 sports every semester — no experience necessary, just a love of healthy competition.",
  },
];

const HOUSING_DINING = [
  {
    icon: "fa-home",
    title: "Residential Life",
    items: [
      "8 on-campus dormitories",
      "5,200 resident students",
      "Flexible meal plan options",
      "24/7 residential advisors",
      "Study lounges & recreation rooms",
    ],
  },
  {
    icon: "fa-utensils",
    title: "Dining & Cafés",
    items: [
      "12 dining locations across campus",
      "Korean, Asian & international menus",
      "Vegetarian & vegan options daily",
      "Nutritionist-curated meal plans",
      "Student-run café culture",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Mei-Ling Zhang",
    year: "3rd Year",
    major: "Environmental Science",
    country: "🇨🇳",
    quote:
      "The campus community at Hansung is unlike anything I imagined. I arrived not knowing a soul and within a week felt completely at home — the international student association and my dormitory community made all the difference.",
  },
  {
    name: "Kwame Asante",
    year: "2nd Year",
    major: "Business Administration",
    country: "🇬🇭",
    quote:
      "Winning the National University Business Plan Competition alongside my Hansung teammates was the proudest moment of my academic career so far. This university gives you the resources and the confidence to aim high.",
  },
  {
    name: "Isabella Ferreira",
    year: "4th Year",
    major: "Performing Arts",
    country: "🇧🇷",
    quote:
      "Hansung's creative arts culture is extraordinary. I've performed in the Grand Auditorium, collaborated with faculty artists, and found my voice as both a performer and a scholar. I couldn't imagine studying anywhere else.",
  },
];

const GALLERY = [
  { label: "University Library" },
  { label: "Central Quad" },
  { label: "Research Lab" },
  { label: "Sports Complex" },
  { label: "Grand Auditorium" },
  { label: "Campus Garden" },
];

const STATS = [
  { num: "200+", label: "Student Organizations" },
  { num: "18", label: "Varsity Sports Teams" },
  { num: "8", label: "On-Campus Dormitories" },
  { num: "12", label: "Dining Locations" },
];

export default function CampusLifePage() {
  return (
    <>
      {/* Page Hero */}
      <div className="uni-page-hero">
        <div className="uni-container">
          <div className="uni-breadcrumb">
            <Link to="/">Home</Link>
            <span className="uni-breadcrumb-sep">/</span>
            <span>Campus Life</span>
          </div>
          <h1 className="uni-page-hero-title">Campus Life</h1>
          <p className="uni-page-hero-text">
            Life at Hansung extends far beyond the lecture hall — discover a
            vibrant, welcoming community built on curiosity, creativity, and
            connection.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="uni-stats-bar" data-ocid="campuslife.stats.section">
        <div className="uni-container">
          <div className="uni-stats-bar-grid">
            {STATS.map((s, i) => (
              <div
                key={String(i)}
                className="uni-stats-bar-item"
                data-ocid={`campuslife.stat.${i + 1}`}
              >
                <div className="uni-stats-bar-number">{s.num}</div>
                <div className="uni-stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Overview */}
      <section
        className="uni-section uni-section-light"
        data-ocid="campuslife.overview.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Life at Hansung
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-campus-overview-grid">
            <div className="uni-campus-overview-text" data-aos="fade-right">
              <p>
                Located in the heart of Seoul, Hansung University offers a
                campus experience that is as intellectually stimulating as it is
                culturally rich. From award-winning dining to world-class sports
                facilities, from student-led arts festivals to global community
                service programs — every aspect of campus life is designed to
                develop the whole person.
              </p>
              <p>
                Our 32,000 students come from 85 countries, making Hansung one
                of the most internationally diverse campuses in Korea. Whether
                you are an incoming undergraduate or a doctoral researcher, you
                will find communities here that share your passions and
                challenge your assumptions.
              </p>
            </div>
            <div className="uni-campus-overview-image" data-aos="fade-left">
              <div className="uni-campus-overview-placeholder">
                <i className="fa fa-university uni-campus-overview-icon" />
                <span className="uni-campus-overview-caption">
                  Hansung Campus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Organizations */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="campuslife.orgs.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Student Organizations
          </h2>
          <p className="uni-section-subtitle" data-aos="fade-up">
            Over 200 clubs and societies — find your community and make your
            mark.
          </p>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-4" data-ocid="campuslife.orgs.list">
            {ORG_CATEGORIES.map((org, i) => (
              <div
                key={String(i)}
                className="uni-org-category-card"
                data-ocid={`campuslife.org.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String((i % 4) * 80)}
              >
                <div className="uni-org-category-icon">
                  <i className={`fa ${org.icon}`} />
                </div>
                <div className="uni-org-category-label">{org.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletics */}
      <section
        className="uni-section uni-section-light"
        data-ocid="campuslife.athletics.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Athletics &amp; Recreation
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="campuslife.athletics.list">
            {ATHLETICS.map((item, i) => (
              <div
                key={String(i)}
                className="uni-athletics-card"
                data-ocid={`campuslife.athletics.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 120)}
              >
                <div className="uni-athletics-card-icon">
                  <i className={`fa ${item.icon}`} />
                </div>
                <h3 className="uni-athletics-card-title">{item.title}</h3>
                <div className="uni-athletics-card-stat">{item.stat}</div>
                <p className="uni-athletics-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining & Housing */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="campuslife.housing.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Dining &amp; Housing
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-2" data-ocid="campuslife.housing.list">
            {HOUSING_DINING.map((item, i) => (
              <div
                key={String(i)}
                className="uni-housing-card"
                data-ocid={`campuslife.housing.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 150)}
              >
                <div className="uni-housing-card-header">
                  <div className="uni-housing-card-icon">
                    <i className={`fa ${item.icon}`} />
                  </div>
                  <h3 className="uni-housing-card-title">{item.title}</h3>
                </div>
                <ul className="uni-housing-card-list">
                  {item.items.map((li) => (
                    <li key={li}>
                      <i className="fa fa-check" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="uni-section uni-section-light"
        data-ocid="campuslife.testimonials.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Student Voices
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="campuslife.testimonials.list">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={String(i)}
                className="uni-testimonial-card"
                data-ocid={`campuslife.testimonial.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String(i * 120)}
              >
                <div className="uni-testimonial-quote-mark">"</div>
                <p className="uni-testimonial-text">{t.quote}</p>
                <div className="uni-testimonial-author">
                  <div className="uni-testimonial-flag">{t.country}</div>
                  <div>
                    <div className="uni-testimonial-name">{t.name}</div>
                    <div className="uni-testimonial-meta">
                      {t.year} · {t.major}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        className="uni-section uni-section-gray"
        data-ocid="campuslife.gallery.section"
      >
        <div className="uni-container">
          <h2 className="uni-section-title" data-aos="fade-up">
            Campus in Pictures
          </h2>
          <div className="uni-section-divider" data-aos="fade-up" />
          <div className="uni-grid-3" data-ocid="campuslife.gallery.list">
            {GALLERY.map((g, i) => (
              <div
                key={String(i)}
                className={`uni-gallery-placeholder uni-gallery-item-${i + 1}`}
                data-ocid={`campuslife.gallery.item.${i + 1}`}
                data-aos="fade-up"
                data-aos-delay={String((i % 3) * 100)}
              >
                <div className="uni-gallery-placeholder-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="uni-section uni-section-navy"
        data-ocid="campuslife.cta.section"
      >
        <div className="uni-container uni-text-center">
          <h2 className="uni-section-title" data-aos="fade-up">
            Experience Hansung First-Hand
          </h2>
          <p
            className="uni-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Visit campus, attend an Open Day, or take a virtual tour. See why
            students from around the world call Hansung home.
          </p>
          <div
            className="uni-cta-btn-group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link
              to="/admissions"
              className="uni-btn uni-btn-primary"
              data-ocid="campuslife.visit.button"
            >
              Schedule a Visit
            </Link>
            <Link
              to="/international"
              className="uni-btn uni-btn-outline"
              data-ocid="campuslife.virtual_tour.button"
            >
              Virtual Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  {
    label: "About",
    href: "/about" as const,
    dropdown: [
      { label: "History & Mission", href: "/about" as const },
      { label: "Leadership", href: "/about" as const },
      { label: "Rankings & Accreditation", href: "/about" as const },
      { label: "Campus Map", href: "/about" as const },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions" as const,
    dropdown: [
      { label: "Undergraduate Admissions", href: "/admissions" as const },
      { label: "Graduate Admissions", href: "/admissions" as const },
      { label: "International Applicants", href: "/admissions" as const },
      { label: "Financial Aid", href: "/admissions" as const },
      { label: "Apply Now", href: "/admissions" as const },
    ],
  },
  {
    label: "Academics",
    href: "/academics" as const,
    dropdown: [
      { label: "Colleges & Schools", href: "/academics" as const },
      { label: "Graduate Programs", href: "/academics" as const },
      { label: "Online Learning", href: "/academics" as const },
      { label: "Academic Calendar", href: "/academics" as const },
    ],
  },
  {
    label: "Research",
    href: "/research" as const,
    dropdown: [
      { label: "Research Centers", href: "/research" as const },
      { label: "Faculty Projects", href: "/research" as const },
      { label: "Publications", href: "/research" as const },
      { label: "Industry Partnerships", href: "/research" as const },
    ],
  },
  {
    label: "Campus Life",
    href: "/campuslife" as const,
    dropdown: [
      { label: "Student Life", href: "/campuslife" as const },
      { label: "Housing & Dining", href: "/campuslife" as const },
      { label: "Clubs & Activities", href: "/campuslife" as const },
      { label: "Wellness & Sports", href: "/campuslife" as const },
    ],
  },
  {
    label: "International",
    href: "/international" as const,
    dropdown: [
      { label: "Global Exchange", href: "/international" as const },
      { label: "Partner Universities", href: "/international" as const },
      { label: "International Students", href: "/international" as const },
      { label: "Study Abroad", href: "/international" as const },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever pathname changes (ref comparison avoids lint warning)
  const lastPath = useRef(pathname);
  if (lastPath.current !== pathname) {
    lastPath.current = pathname;
    if (mobileOpen) setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`uni-header ${scrolled ? "uni-header-solid" : "uni-header-transparent"}`}
        data-ocid="header.panel"
      >
        <div className="uni-header-inner">
          {/* Logo */}
          <Link to="/" className="uni-logo" data-ocid="header.logo.link">
            <div className="uni-logo-mark">H</div>
            <div>
              <div className="uni-logo-text-primary">HANSUNG</div>
              <div className="uni-logo-text-sub">
                University of Arts &amp; Sciences
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="uni-nav" data-ocid="nav.list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="uni-nav-item">
                <Link
                  to={item.href}
                  className={`uni-nav-link${pathname === item.href ? " active" : ""}`}
                  data-ocid={`nav.${item.label.toLowerCase().replace(" ", "_")}.link`}
                >
                  {item.label}
                  <i className="fa fa-chevron-down chevron" />
                </Link>
                <div className="uni-dropdown">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.label} to={sub.href}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="uni-header-actions">
            <button
              type="button"
              className="uni-icon-btn"
              aria-label="Search"
              data-ocid="header.search_button"
            >
              <i className="fa fa-search" />
            </button>
            <button
              type="button"
              className="uni-lang-btn"
              data-ocid="header.lang_toggle"
            >
              EN
            </button>
            <Link
              to="/admissions"
              className="uni-apply-btn"
              data-ocid="header.apply_button"
            >
              Apply Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className={`uni-hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            data-ocid="header.hamburger_button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`uni-mobile-menu${mobileOpen ? " open" : ""}`}
        data-ocid="nav.mobile_menu"
      >
        <Link to="/" data-ocid="nav.mobile.home.link">
          Home
        </Link>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setMobileOpen(false)}
            data-ocid={`nav.mobile.${item.label.toLowerCase().replace(" ", "_")}.link`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/admissions"
          onClick={() => setMobileOpen(false)}
          style={{ color: "var(--uni-accent)", marginTop: "1rem" }}
        >
          Apply Now →
        </Link>
      </nav>
    </>
  );
}

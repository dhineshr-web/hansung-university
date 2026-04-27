import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "hansung.edu",
  );

  return (
    <footer className="uni-footer" data-ocid="footer.panel">
      <div className="uni-container">
        <div className="uni-footer-grid">
          {/* Brand */}
          <div className="uni-footer-brand">
            <h3>HANSUNG University</h3>
            <p>
              Igniting creative potential through rigorous academics,
              groundbreaking research, and a vibrant global community.
            </p>
            <div className="uni-footer-social">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.facebook.link"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.twitter.link"
              >
                <i className="fab fa-x-twitter" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram.link"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.youtube.link"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.linkedin.link"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Academics */}
          <div className="uni-footer-col">
            <h4>Academics</h4>
            <ul>
              <li>
                <Link to="/academics">Colleges &amp; Schools</Link>
              </li>
              <li>
                <Link to="/academics">Graduate Programs</Link>
              </li>
              <li>
                <Link to="/academics">Online Learning</Link>
              </li>
              <li>
                <Link to="/academics">Academic Calendar</Link>
              </li>
              <li>
                <Link to="/research">Research Centers</Link>
              </li>
            </ul>
          </div>

          {/* Campus Life */}
          <div className="uni-footer-col">
            <h4>Campus Life</h4>
            <ul>
              <li>
                <Link to="/campuslife">Student Services</Link>
              </li>
              <li>
                <Link to="/campuslife">Housing &amp; Dining</Link>
              </li>
              <li>
                <Link to="/campuslife">Clubs &amp; Activities</Link>
              </li>
              <li>
                <Link to="/campuslife">Health &amp; Wellness</Link>
              </li>
              <li>
                <Link to="/international">Global Programs</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="uni-footer-col uni-footer-contact">
            <h4>Contact Us</h4>
            <p>
              <i className="fa fa-map-marker-alt" />
              <span>
                123 University Boulevard,
                <br />
                Seoul, Republic of Korea 04763
              </span>
            </p>
            <p>
              <i className="fa fa-phone" />
              <span>+82-2-1234-5678</span>
            </p>
            <p>
              <i className="fa fa-envelope" />
              <span>admissions@hansung.edu</span>
            </p>
            <p>
              <i className="fa fa-clock" />
              <span>Mon–Fri, 9:00 AM – 5:30 PM KST</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="uni-footer-bottom">
          <span>
            &copy; {year} Hansung University of Arts &amp; Sciences. All rights
            reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
          <span style={{ display: "flex", gap: "1.25rem" }}>
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms of Use</Link>
            <Link to="/about">Accessibility</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

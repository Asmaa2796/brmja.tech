import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { scrollToSection } from "../../../features/helpers/ScrollToSection";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const handleScroll = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
      closeNavbar();
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };
  return (
    <nav  className={`navbar navbar-expand-lg bg-white ${
        isFixed ? "fixed-top shadow-sm" : "position-relative"
      }`}>
      <div className="container">
        <Link className="navbar-brand mx-0" to="/">
          <img src="/logo.png" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 p-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                الرئيسية
              </a>
            </li>
            <li onClick={() => handleScroll("about")}>
              <a className="nav-link">
                من نحن
              </a>
            </li>
            <li onClick={() => handleScroll("services")}>
              <a className="nav-link">
                خدماتنا
              </a>
            </li>
            <li onClick={() => handleScroll("why_choose_us")}>
              <a className="nav-link">
                لماذا تختارنا؟
              </a>
            </li>
            <li onClick={() => handleScroll("our_works")}>
              <a className="nav-link">
                أعمالنا
              </a>
            </li>
            <li onClick={() => handleScroll("our_projects")}>
              <a className="nav-link">
                مشاريعنا
              </a>
            </li>
            <li onClick={() => handleScroll("our_team")}>
              <a className="nav-link">
                فريق العمل
              </a>
            </li>
          </ul>
          <span
            className="contact shadow-sm"
            onClick={() => handleScroll("contact_us")}
          >
            تواصل معنا
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

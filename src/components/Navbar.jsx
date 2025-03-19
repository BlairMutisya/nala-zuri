import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [safarisOpen, setSafarisOpen] = useState(false);
  const [swahiliOpen, setSwahiliOpen] = useState(false);

  const location = useLocation(); // Get current route

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/Nalazuri logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            DISCOVER
          </Link>
        </li>

        {/* WHEN & WHERE Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          WHEN & WHERE ▾
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {/* Safaris */}
              <li
                className="dropdown-item"
                onMouseEnter={() => setSafarisOpen(true)}
                onMouseLeave={() => setSafarisOpen(false)}
              >
                Safaris ▸
                {safarisOpen && (
                  <ul className="sub-dropdown">
                    <li>
                      <Link
                        to="/olpejeta"
                        className={
                          location.pathname === "/olpejeta" ? "active" : ""
                        }
                      >
                        Ol Pejeta Conservancy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/maasai-mara"
                        className={
                          location.pathname === "/maasai-mara" ? "active" : ""
                        }
                      >
                        Maasai Mara National Reserve
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/amboseli"
                        className={
                          location.pathname === "/amboseli" ? "active" : ""
                        }
                      >
                        Amboseli National Park
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tsavo"
                        className={
                          location.pathname === "/tsavo" ? "active" : ""
                        }
                      >
                        Tsavo National Parks (East & West)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/nakuru"
                        className={
                          location.pathname === "/nakuru" ? "active" : ""
                        }
                      >
                        Lake Nakuru National Park
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/samburu"
                        className={
                          location.pathname === "/samburu" ? "active" : ""
                        }
                      >
                        Samburu National Reserve
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/nairobi"
                        className={
                          location.pathname === "/nairobi" ? "active" : ""
                        }
                      >
                        Nairobi National Park
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/meru"
                        className={
                          location.pathname === "/meru" ? "active" : ""
                        }
                      >
                        Meru National Park
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Swahili Coast */}
              <li
                className="dropdown-item"
                onMouseEnter={() => setSwahiliOpen(true)}
                onMouseLeave={() => setSwahiliOpen(false)}
              >
                Swahili Coast ▸
                {swahiliOpen && (
                  <ul className="sub-dropdown">
                    <li>
                      <Link
                        to="/lamu"
                        className={
                          location.pathname === "/lamu" ? "active" : ""
                        }
                      >
                        Lamu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/watamu"
                        className={
                          location.pathname === "/watamu" ? "active" : ""
                        }
                      >
                        Watamu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kilifi"
                        className={
                          location.pathname === "/kilifi" ? "active" : ""
                        }
                      >
                        Kilifi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/diani"
                        className={
                          location.pathname === "/diani" ? "active" : ""
                        }
                      >
                        Diani
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/how"
            className={location.pathname === "/how" ? "active" : ""}
          >
            HOW
          </Link>
        </li>
        <li>
          <Link
            to="/inquiries"
            className={location.pathname === "/inquiries" ? "active" : ""}
          >
            INQUIRIES
          </Link>
        </li>
        <li>
          <Link
            to="/makeadifference"
            className={location.pathname === "/makeadifference" ? "active" : ""}
          >
            MAKE A DIFFERENCE
          </Link>
        </li>
        <li>
          <Link
            to="/ourstory"
            className={location.pathname === "/ourstory" ? "active" : ""}
          >
            OUR STORY
          </Link>
        </li>
        <li>
          <GoogleTranslate />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              DISCOVER
            </Link>
          </li>

          {/* WHEN & WHERE */}
          <li onClick={() => setDropdownOpen(!dropdownOpen)}>
            WHEN & WHERE ▾
            {dropdownOpen && (
              <ul className="mobile-dropdown">
                {/* Safaris */}
                <li onClick={() => setSafarisOpen(!safarisOpen)}>
                  Safaris ▸
                  {safarisOpen && (
                    <ul className="mobile-sub-dropdown">
                      <li>
                        <Link to="/olpejeta" onClick={() => setMenuOpen(false)}>
                          Ol Pejeta Conservancy
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Swahili Coast */}
                <li onClick={() => setSwahiliOpen(!swahiliOpen)}>
                  Swahili Coast ▸
                  {swahiliOpen && (
                    <ul className="mobile-sub-dropdown">
                      <li>
                        <Link to="/lamu" onClick={() => setMenuOpen(false)}>
                          Lamu
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/how" onClick={() => setMenuOpen(false)}>
              HOW
            </Link>
          </li>
          <li>
            <Link to="/inquiries" onClick={() => setMenuOpen(false)}>
              INQUIRIES
            </Link>
          </li>
          <li>
            <Link to="/makeadifference" onClick={() => setMenuOpen(false)}>
              MAKE A DIFFERENCE
            </Link>
          </li>
          <li>
            <Link to="/ourstory" onClick={() => setMenuOpen(false)}>
              OUR STORY
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

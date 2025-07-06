import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; 
import "./Navbar.css";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [safarisOpen, setSafarisOpen] = useState(false);
  const [swahiliOpen, setSwahiliOpen] = useState(false);

  const location = useLocation();

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
           WHERE ▾
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {/* Safaris */}
              <li
                className="dropdown-item"
                onMouseEnter={() => setSafarisOpen(true)}
                onMouseLeave={() => setSafarisOpen(false)}
              >
                SAFARIS ▸
                {safarisOpen && (
                    <ul className="sub-dropdown">
                      <li>
                        <Link
                            to="/amboseli"
                            className={location.pathname === "/amboseli" ? "active" : ""}
                        >
                          AMBOSELI NATIONAL PARK
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/lake-nakuru"
                            className={location.pathname === "/nakuru" ? "active" : ""}
                        >
                          LAKE NAKURU NATIONAL PARK
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/maasai-mara"
                            className={location.pathname === "/maasai-mara" ? "active" : ""}
                        >
                          MAASAI MARA NATIONAL RESERVE
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/meru"
                            className={location.pathname === "/meru" ? "active" : ""}
                        >
                          MERU NATIONAL PARK
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/nairobi"
                            className={location.pathname === "/nairobi" ? "active" : ""}
                        >
                          NAIROBI NATIONAL PARK
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/olpejeta"
                            className={location.pathname === "/olpejeta" ? "active" : ""}
                        >
                          OL PEJETA CONSERVANCY
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/samburu"
                            className={location.pathname === "/samburu" ? "active" : ""}
                        >
                          SAMBURU NATIONAL RESERVE
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/tsavo"
                            className={location.pathname === "/tsavo" ? "active" : ""}
                        >
                          TSAVO NATIONAL PARKS (EAST & WEST)
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
                SWAHILI COAST ▸
                {swahiliOpen && (
                    <ul className="sub-dropdown">
                      <li>
                        <Link
                            to="/diani"
                            className={location.pathname === "/diani" ? "active" : ""}
                        >
                          DIANI
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/kilifi"
                            className={location.pathname === "/kilifi" ? "active" : ""}
                        >
                          KILIFI
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/lamu"
                            className={location.pathname === "/lamu" ? "active" : ""}
                        >
                          LAMU
                        </Link>
                      </li>
                      <li>
                        <Link
                            to="/watamu"
                            className={location.pathname === "/watamu" ? "active" : ""}
                        >
                          WATAMU
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

          {/* WHEN & WHERE Dropdown */}
          <li>
            <div
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                if (!dropdownOpen) {
                  setSafarisOpen(false);
                  setSwahiliOpen(false);
                }
              }}
            >
              WHEN & WHERE ▾
            </div>

            {dropdownOpen && (
              <ul className="mobile-dropdown">
                {/* Safaris */}
                <li>
                  <div
                    onClick={() => {
                      setSafarisOpen(!safarisOpen);
                      setSwahiliOpen(false);
                    }}
                  >
                    SAFARIS ▸
                  </div>
                  {safarisOpen && (
                      <ul className="mobile-sub-dropdown">
                        <li>
                          <Link to="/amboseli" onClick={() => setMenuOpen(false)}>
                            AMBOSELI NATIONAL PARK
                          </Link>
                        </li>
                        <li>
                          <Link to="/lake-nakuru" onClick={() => setMenuOpen(false)}>
                            LAKE NAKURU NATIONAL RESERVE
                          </Link>
                        </li>
                        <li>
                          <Link to="/maasai-mara" onClick={() => setMenuOpen(false)}>
                            MAASAI MARA NATIONAL RESERVE
                          </Link>
                        </li>
                        <li>
                          <Link to="/meru" onClick={() => setMenuOpen(false)}>
                            MERU NATIONAL RESERVE
                          </Link>
                        </li>
                        <li>
                          <Link to="/nairobi" onClick={() => setMenuOpen(false)}>
                            NAIROBI NATIONAL RESERVE
                          </Link>
                        </li>
                        <li>
                          <Link to="/olpejeta" onClick={() => setMenuOpen(false)}>
                            OL PEJETA CONSERVANCY
                          </Link>
                        </li>
                        <li>
                          <Link to="/samburu" onClick={() => setMenuOpen(false)}>
                            SAMBURU NATIONAL RESERVE
                          </Link>
                        </li>
                        <li>
                          <Link to="/tsavo" onClick={() => setMenuOpen(false)}>
                            TSAVO NATIONAL PARKS
                          </Link>
                        </li>
                      </ul>

                  )}
                </li>

                {/* Swahili Coast */}
                <li>
                  <div
                    onClick={() => {
                      setSwahiliOpen(!swahiliOpen);
                      setSafarisOpen(false);
                    }}
                  >
                    SWAHILI COAST ▸
                  </div>
                  {swahiliOpen && (
                      <ul className="mobile-sub-dropdown">
                        <li>
                          <Link to="/diani" onClick={() => setMenuOpen(false)}>
                            DIANI
                          </Link>
                        </li>
                        <li>
                          <Link to="/kilifi" onClick={() => setMenuOpen(false)}>
                            KILIFI
                          </Link>
                        </li>
                        <li>
                          <Link to="/lamu" onClick={() => setMenuOpen(false)}>
                            LAMU
                          </Link>
                        </li>
                        <li>
                          <Link to="/watamu" onClick={() => setMenuOpen(false)}>
                            WATAMU
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
          <li>
            <GoogleTranslate />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

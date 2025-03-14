import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // For navigation
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [safarisOpen, setSafarisOpen] = useState(false);
  const [swahiliOpen, setSwahiliOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Home Link Added to Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/Nalazuri logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
<li>
  <Link to="/" exact activeClassName="active">DISCOVER</Link>
</li>


        {/* Dropdown for When & Where */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          WHEN & WHERE
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {/* Safaris Dropdown */}
              <li
                className="dropdown-item"
                onMouseEnter={() => setSafarisOpen(true)}
                onMouseLeave={() => setSafarisOpen(false)}
              >
                Safaris ▸
                {safarisOpen && (
                  <ul className="sub-dropdown">
                    <li>
                      <Link to="/olpejeta">Ol Pejeta Conservancy</Link>
                    </li>
                    <li>
                      <Link to="/maasai-mara">
                        Maasai Mara National Reserve
                      </Link>
                    </li>
                    <li>
                      <Link to="/amboseli">Amboseli National Park</Link>
                    </li>
                    <li>
                      <Link to="/tsavo">
                        Tsavo National Parks (East & West)
                      </Link>
                    </li>
                    <li>
                      <Link to="/nakuru">Lake Nakuru National Park</Link>
                    </li>
                    <li>
                      <Link to="/samburu">Samburu National Reserve</Link>
                    </li>
                    <li>
                      <Link to="/nairobi">Nairobi National Park</Link>
                    </li>
                    <li>
                      <Link to="/meru">Meru National Park</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Swahili Coast Dropdown */}
              <li
                className="dropdown-item"
                onMouseEnter={() => setSwahiliOpen(true)}
                onMouseLeave={() => setSwahiliOpen(false)}
              >
                Swahili Coast ▸
                {swahiliOpen && (
                  <ul className="sub-dropdown">
                    <li>
                      <Link to="/lamu">Lamu</Link>
                    </li>
                    <li>
                      <Link to="/watamu">Watamu</Link>
                    </li>
                    <li>
                      <Link to="/kilifi">Kilifi</Link>
                    </li>
                    <li>
                      <Link to="/diani">Diani</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/how">HOW</Link>
        </li>
        <li>
          <Link to="/inquiries">INQUIRIES</Link>
        </li>
        <li>
          <Link to="/makeadifference">MAKE A DIFFERENCE</Link>
        </li>
                <li>
          <Link to="/ourstory">OUR STORY</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li className="active">Discover</li>

          {/* Mobile Dropdown */}
          <li onClick={() => setDropdownOpen(!dropdownOpen)}>
            WHEN & WHERE {dropdownOpen ? "▲" : "▼"}
            {dropdownOpen && (
              <ul className="mobile-dropdown">
                {/* Safaris */}
                <li onClick={() => setSafarisOpen(!safarisOpen)}>
                  Safaris {safarisOpen ? "▲" : "▼"}
                  {safarisOpen && (
                    <ul className="mobile-sub-dropdown">
                      <li>
                        <Link to="/olpejeta">Ol Pejeta Conservancy</Link>
                      </li>
                      <li>
                        <Link to="/maasai-mara">
                          Maasai Mara National Reserve
                        </Link>
                      </li>
                      <li>
                        <Link to="/amboseli">Amboseli National Park</Link>
                      </li>
                      <li>
                        <Link to="/tsavo">
                          Tsavo National Parks (East & West)
                        </Link>
                      </li>
                      <li>
                        <Link to="/nakuru">Lake Nakuru National Park</Link>
                      </li>
                      <li>
                        <Link to="/samburu">Samburu National Reserve</Link>
                      </li>
                      <li>
                        <Link to="/nairobi">Nairobi National Park</Link>
                      </li>
                      <li>
                        <Link to="/meru">Meru National Park</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Swahili Coast */}
                <li onClick={() => setSwahiliOpen(!swahiliOpen)}>
                  Swahili Coast {swahiliOpen ? "▲" : "▼"}
                  {swahiliOpen && (
                    <ul className="mobile-sub-dropdown">
                      <li>
                        <Link to="/lamu">Lamu</Link>
                      </li>
                      <li>
                        <Link to="/watamu">Watamu</Link>
                      </li>
                      <li>
                        <Link to="/kilifi">Kilifi</Link>
                      </li>
                      <li>
                        <Link to="/diani">Diani</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li>How</li>
          <li>Inquiries</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

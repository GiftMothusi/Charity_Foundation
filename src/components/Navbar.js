import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo/logo.jpg";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="containerNav">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img src={logo} alt="logo" className="object-fit h-20 w-30" />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/pages/Home`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>

                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to={"/pages/About"}>
                    About Us <FiChevronDown className="dropdown_arrow1" />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={"/pages/Causes"}
                      >
                        Causes
                      </NavLink>
                    </li>
                    <li onClick={toggleClass} activeClassName="is-active">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={"/pages/Gallery"}
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li onClick={toggleClass} activeClassName="is-active">
                      <NavLink
                        to={"/pages/OurTeam"}
                        onClick={toggleClass}
                        activeClassName="is-active"
                      >
                        Our Team
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/pages/News`}
                  >
                    News
                  </NavLink>
                </li>

                <li className="menu-item">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/pages/Events`}
                  >
                    {" "}
                    Events{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/pages/Donate`}
                  >
                    {" "}
                    Donate{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/pages/Contact`}
                  >
                    {" "}
                    Contact{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbarmenu;

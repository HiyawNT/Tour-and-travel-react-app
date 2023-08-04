import Navbarlogo from "../images/logo.svg";
import { PageLinks } from "../Data";
import { SocialLinks } from "../Data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Navbarlogo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {PageLinks.map((NavLink) => {
              return (
                <li key={NavLink.id}>
                  <a href={NavLink.href} className="nav-link">
                    {NavLink.text}
                  </a>
                </li>
              );
            })}

            {/* <li>
              <a href="#home" className="nav-link">
                {" "}
                home{" "}
              </a>
            </li> */}

            {/* <li>
              <a href="#about" className="nav-link">
                {" "}
                about{" "}
              </a>
            </li>

            <li>
              <a href="#services" className="nav-link">
                {" "}
                services{" "}
              </a>
            </li>

            <li>
              <a href="#tours" className="nav-link">
                {" "}
                tours
              </a>
            </li> */}
          </ul>

          {/* Using the Destructing methods */}
          <ul className="nav-icons">
            {SocialLinks.map((socials) => {
              const { id, href, icon } = socials;

              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

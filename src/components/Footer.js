import { PageLinks, SocialLinks } from "../Data";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {/* Using Destruction Method */}
          {PageLinks.map((NavLinks) => {
            const { id, href, text } = NavLinks;
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="footer-icons">
          {SocialLinks.map((Socials) => {
            return (
              <li key={Socials.id}>
                <a
                  href={Socials.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={Socials.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Ethio tours and travel's Agency
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;

import { Titles } from "./Titles";
import { ServicesContent } from "../Data";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Titles Title="What We" Sub="Offer" />
        <div className="section-center services-center">
          {ServicesContent.map((Contents) => {
            const { id, icon, title, text } = Contents;
            return (
              <article key={id} className="service">
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Services;

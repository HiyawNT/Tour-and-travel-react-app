import { Titles } from "./Titles";
import { TourCards } from "../Data";
const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Titles Title="Take a" Sub="Tour" />

        <div className="section-center featured-center">
          {TourCards.map((TourCards) => {
            const {
              id,
              img,
              date,
              title,
              icon,
              numDays,
              text,
              price,
              location,
            } = TourCards;
            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{numDays}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;

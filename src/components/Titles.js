export const Titles = ({ Title, Sub }) => {
  return (
    <div className="section-title">
      <h2>
        {Title} <span>{Sub}</span>
      </h2>
    </div>
  );
};

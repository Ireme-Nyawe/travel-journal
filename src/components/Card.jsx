export default function Card({title,startDate,endDate,location,googlemap,deascription,image}) {
  return (
    <div className="card">
      <img
        src={image}
        alt="journal-image"
        className="card-image"
      />
      <div className="card-part">
        <div className="line1-card">
          <div>
          <img
            src="../src/assets/location-icon.png"
            alt="location-icon"
            className="location-icon"
          />
          <span>{location}</span>
          </div>
          <a href={googlemap}>View on Google Maps</a>
        </div>
        <h2 className="title">{title}</h2>
        <h4 className="date-range">{startDate}-{endDate}</h4>
        <p className="description">{deascription}
        </p>
      </div>
    </div>
  );
}

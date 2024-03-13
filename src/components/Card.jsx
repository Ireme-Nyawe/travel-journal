export default function Card(props) {
  return (
    <div className="card">
      <img
        src="../src/assets/card-image.png"
        alt="journal-image"
        className="card-image"
      />
      <div className="card-part">
        <div className="line1-card">
          <img
            src="../src/assets/location-icon.png"
            alt="location-icon"
            className="location-icon"
          />
          <span>JAPAN</span>
          <a href="">View on Google Maps</a>
        </div>
        <h2 className="title">{props.name}</h2>
        <h4 className="date-range">1222-333</h4>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

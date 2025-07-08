import logo from "../assets/react.svg";

export default function Entry(props) {
  const { img, title, country, googleMapsLink, dates, text } = props;
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={img.src} alt={img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={logo} alt="map marker icon" />
        <span className="country">{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{title}</h2>
        <p className="trip-dates">{dates}</p>
        <p className="entry-text">{text}</p>
      </div>
    </article>
  );
}

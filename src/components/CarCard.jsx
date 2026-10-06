import { Link } from "react-router-dom";

const money = new Intl.NumberFormat("en-india", {
  style: "currency",
  currency: "rupees",
  maximumFractionDigits: 0,
});

function CarCard({ car }) {
  return (
    <article className="car-card">
      <Link className="car-image-link" to={`/cars/${car.id}`}>
        <img className="car-image" src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
        <span className="image-badge">Inspected</span>
      </Link>

      <div className="car-card-content">
        <div className="car-card-heading">
          <div>
            <p className="eyebrow">{car.year} · {car.make}</p>
            <h3>{car.model}</h3>
          </div>
          <strong className="car-price">{money.format(car.price)}</strong>
        </div>

        <div className="car-specs">
          <span>{car.mileage.toLocaleString()} mi</span>
          <span>{car.fuel}</span>
          <span>{car.transmission}</span>
        </div>

        <Link className="card-link" to={`/cars/${car.id}`}>
          View details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default CarCard;
import { Link, useParams } from "react-router-dom";
import { cars } from "../data/cars";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "rupees",
  maximumFractionDigits: 0,
});

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((item) => item.id === id);

  if (!car) {
    return (
      <main className="container page-content empty-state">
        <h1>Car not found</h1>
        <p>That listing may no longer be available.</p>
        <Link className="button button-dark" to="/inventory">Browse cars</Link>
      </main>
    );
  }

  return (
    <main className="container page-content">
      <Link className="back-link" to="/inventory">← Back to all cars</Link>

      <div className="details-layout">
        <div>
          <img className="details-image" src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
          <div className="details-description">
            <span className="eyebrow">About this car</span>
            <h2>Ready for the road.</h2>
            <p>{car.description}</p>
          </div>
        </div>

        <aside className="details-card">
          <span className="image-badge">Inspected</span>
          <p className="eyebrow">{car.year} · {car.make}</p>
          <h1>{car.model}</h1>
          <p className="details-price">{money.format(car.price)}</p>
          <p className="details-tax">Transparent pricing. No surprises.</p>

          <div className="details-specs">
            <div><span>Mileage</span><strong>{car.mileage.toLocaleString()} mi</strong></div>
            <div><span>Fuel type</span><strong>{car.fuel}</strong></div>
            <div><span>Transmission</span><strong>{car.transmission}</strong></div>
            <div><span>Body style</span><strong>{car.body}</strong></div>
            <div><span>Exterior</span><strong>{car.color}</strong></div>
          </div>

          <a className="button button-dark button-full" href="mailto:hello@northstarmotors.example?subject=Car%20enquiry">
            Enquire about this car <span>→</span>
          </a>
          <p className="contact-note">Questions? Email hello@northstarmotors.example</p>
        </aside>
      </div>
    </main>
  );
}

export default CarDetails;
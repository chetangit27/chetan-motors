import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">A better way to find your next car</span>
            <h1>Good cars.<br /><span>Good decisions.</span></h1>
            <p>
              Carefully selected cars, upfront pricing, and a buying experience
              that puts you first.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" to="/inventory">
                Explore our cars <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" to="/sell">Have a car to sell?</Link>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span><span>M</span><span>A</span>
              </div>
              <span><strong>2,000+</strong> happy drivers</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=90"
              alt="A car on a scenic road"
            />
            <div className="hero-note">
              <span className="note-icon">✓</span>
              <span><strong>Every car inspected</strong><small>Quality you can count on</small></span>
            </div>
            <div className="hero-index">01 <span>/ 03</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-items">
          <span><b>✓</b> Carefully inspected</span>
          <span><b>✓</b> Transparent pricing</span>
          <span><b>✓</b> Friendly, expert support</span>
        </div>
      </section>

      <section className="section container" id="featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Handpicked for you</span>
            <h2>Featured cars</h2>
          </div>
          <Link className="text-link" to="/inventory">View all cars <span>→</span></Link>
        </div>

        <div className="car-grid">
          {cars.slice(0, 3).map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </section>

      <section className="why-section" id="why-us">
        <div className="container why-grid">
          <div>
            <span className="eyebrow">The Northstar difference</span>
            <h2>Car shopping,<br />without the guesswork.</h2>
          </div>
          <div className="why-copy">
            <p>
              We believe buying a car should feel exciting, not overwhelming.
              Every vehicle is inspected, every price is clear, and our team is
              here whenever you need us.
            </p>
            <Link className="button button-outline" to="/inventory">Find your car <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
import { useState } from "react";

function SellYourCar() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xwlvplez", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setError("Could not submit your request. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    }
  }

  return (
    <main className="container page-content sell-page">
      <div className="page-heading">
        <span className="eyebrow">Simple, straightforward, stress-free</span>
        <h1>Ready to sell your car?</h1>
        <p>Tell us a little about your car and our team will get in touch.</p>
      </div>

      {submitted ? (
        <div className="success-message">
          <span className="success-icon">✓</span>
          <h2>Thanks for getting in touch.</h2>
          <p>Your details have been submitted. Our team will follow up soon.</p>
          <button
            className="button button-dark"
            type="button"
            onClick={() => setSubmitted(false)}
          >
            Submit another car
          </button>
        </div>
      ) : (
        <form className="sell-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Make
              <input name="make" placeholder="e.g. Toyota" required />
            </label>
            <label>
              Model
              <input name="model" placeholder="e.g. RAV4" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Year
              <input
                name="year"
                type="number"
                min="1980"
                max="2027"
                placeholder="e.g. 2022"
                required
              />
            </label>
            <label>
              Mileage
              <input
                name="mileage"
                type="number"
                min="0"
                placeholder="e.g. 25000"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Your name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label>
            Anything else we should know?
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your car..."
            />
          </label>

          {error && <p role="alert">{error}</p>}

          <button className="button button-dark" type="submit">
            Request an appraisal <span>→</span>
          </button>
        </form>
      )}
    </main>
  );
}

export default SellYourCar;
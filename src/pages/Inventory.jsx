import { useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function Inventory() {
  const [search, setSearch] = useState("");
  const [fuel, setFuel] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredCars = useMemo(() => {
    const query = search.trim().toLowerCase();

    let results = cars.filter((car) => {
      const matchesSearch =
        `${car.year} ${car.make} ${car.model} ${car.body}`.toLowerCase().includes(query);
      const matchesFuel = fuel === "All" || car.fuel === fuel;
      return matchesSearch && matchesFuel;
    });

    if (sort === "price-low") results = [...results].sort((a, b) => a.price - b.price);
    if (sort === "price-high") results = [...results].sort((a, b) => b.price - a.price);
    if (sort === "year-new") results = [...results].sort((a, b) => b.year - a.year);

    return results;
  }, [search, fuel, sort]);

  return (
    <main className="container page-content">
      <div className="page-heading">
        <span className="eyebrow">The collection</span>
        <h1>Find your next car.</h1>
        <p>Explore our handpicked selection of inspected vehicles.</p>
      </div>

      <div className="inventory-toolbar">
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search make, model, or body style"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <label className="select-label">
          <span className="sr-only">Filter by fuel type</span>
          <select value={fuel} onChange={(event) => setFuel(event.target.value)}>
            <option value="All">All fuel types</option>
            <option>Petrol</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>
        </label>

        <label className="select-label">
          <span className="sr-only">Sort cars</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="year-new">Newest year</option>
          </select>
        </label>
      </div>

      <p className="results-count">{filteredCars.length} cars available</p>

      {filteredCars.length ? (
        <div className="car-grid inventory-grid">
          {filteredCars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No cars found</h2>
          <p>Try changing your search or filters.</p>
          <button className="button button-dark" onClick={() => { setSearch(""); setFuel("All"); }}>
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}

export default Inventory;
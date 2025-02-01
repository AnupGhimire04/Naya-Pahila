import "../App.css";

const countries = [
  { name: "USA", flag: "https://flagcdn.com/us.svg" },
  { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "UK", flag: "https://flagcdn.com/gb.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
];

const Countries = () => {
  return (
    <section className="countries" id="countries">
      <h2>We Help You Apply To</h2>
      <div className="countries-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <img src={country.flag} alt={`${country.name} Flag`} className="flag" />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
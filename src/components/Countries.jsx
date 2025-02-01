import "../App.css"; // Using App.css for styles

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
];

const Countries = () => {
  return (
    <section className="countries">
      <h2>We Help You Apply To</h2>
      <div className="countries-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <span className="flag">{country.flag}</span>
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;

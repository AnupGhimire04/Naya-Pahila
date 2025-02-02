import "../App.css";

const Hero = () => {
  const handleExploreClick = () => {
    document.getElementById("countries").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Start Your Journey with UCL</h1>
        <p>Apply to top universities in the USA, Europe, Australia, and Canada.</p>
        <button className="hero-btn" onClick={handleExploreClick}>
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
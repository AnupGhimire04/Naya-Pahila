import "../App.css";

const courses = [
  { name: "IELTS", desc: "Prepare for English proficiency tests.", icon: "📘" },
  { name: "TOEFL", desc: "Improve your academic English skills.", icon: "📖" },
  { name: "SAT", desc: "Boost your college admission scores.", icon: "📚" },
  { name: "GRE", desc: "Ace graduate school entrance exams.", icon: "🎓" },
  { name: "GMAT", desc: "Get ready for business school applications.", icon: "💼" },
  { name: "PTE", desc: "Alternative to IELTS for studying abroad.", icon: "🌍" },
];

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <h2>Our Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h3>{course.name}</h3>
            <p>{course.desc}</p>
            <button className="course-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
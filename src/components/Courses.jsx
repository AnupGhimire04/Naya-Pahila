import "../App.css"; // Using App.css for styles

const courses = [
  { name: "IELTS", desc: "Prepare for English proficiency tests." },
  { name: "TOEFL", desc: "Improve your academic English skills." },
  { name: "SAT", desc: "Boost your college admission scores." },
  { name: "GRE", desc: "Ace graduate school entrance exams." },
  { name: "GMAT", desc: "Get ready for business school applications." },
  { name: "PTE", desc: "Alternative to IELTS for studying abroad." },
];

const Courses = () => {
  return (
    <section className="courses">
      <h2>Our Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

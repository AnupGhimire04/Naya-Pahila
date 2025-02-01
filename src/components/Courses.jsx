import { useState } from "react";
import "../App.css";

const courses = [
  {
    name: "IELTS",
    desc: "Prepare for English proficiency tests.",
    icon: "📘",
    fullDesc: "The International English Language Testing System (IELTS) is designed to help you work, study, or migrate to a country where English is the native language.",
  },
  {
    name: "TOEFL",
    desc: "Improve your academic English skills.",
    icon: "📖",
    fullDesc: "The Test of English as a Foreign Language (TOEFL) is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.",
  },
  {
    name: "SAT",
    desc: "Boost your college admission scores.",
    icon: "📚",
    fullDesc: "The SAT is a standardized test widely used for college admissions in the United States. It assesses your readiness for college.",
  },
  {
    name: "GRE",
    desc: "Ace graduate school entrance exams.",
    icon: "🎓",
    fullDesc: "The Graduate Record Examination (GRE) is a standardized test that is an admissions requirement for many graduate schools in the United States and Canada.",
  },
  {
    name: "GMAT",
    desc: "Get ready for business school applications.",
    icon: "💼",
    fullDesc: "The Graduate Management Admission Test (GMAT) is a computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills in written English for use in admission to a graduate management program, such as an MBA.",
  },
  {
    name: "PTE",
    desc: "Alternative to IELTS for studying abroad.",
    icon: "🌍",
    fullDesc: "The Pearson Test of English (PTE) is a computer-based academic English language test aimed at non-native English speakers wanting to study abroad.",
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="courses" id="courses">
      <h2>Our Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h3>{course.name}</h3>
            <p>{course.desc}</p>
            <button className="course-btn" onClick={() => handleLearnMore(course)}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Course Description */}
      {selectedCourse && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedCourse.name}</h3>
            <p>{selectedCourse.fullDesc}</p>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
import { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Visit us at our office or get in touch via phone or email.</p>

      <div className="contact-info">
        <p><strong>📍 Location:</strong> Kathmandu, Bagbazar, Nepal</p>
        <p><strong>📞 Phone:</strong> +977-1234567890</p>
        <p><strong>📧 Email:</strong> ucl.admissions@gmail.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>

      <div className="map-container">
        <iframe
          title="UCL Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.515615056461!2d85.31949737532906!3d27.703722076156237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd195c6a85%3A0xa0707f2b9b735e79!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1706789658710"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
import "../App.css"; // Using App.css for styles

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Visit us at our office or get in touch via phone or email.</p>

      <div className="contact-info">
        <p><strong>📍 Location:</strong> Kathmandu, Bagbazar, Nepal</p>
        <p><strong>📞 Phone:</strong> +977-1234567890</p>
        <p><strong>📧 Email:</strong> nayapahila2081@gmail.com</p>
      </div>

      <div className="map-container">
        <iframe
          title="Naya Pahila Location"
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

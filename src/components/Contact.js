import React from "react";

const Contact = () => {
  return (
    <>
      {/* <!-- Section 4 --> */}
      <section className="section-4" id="contact">
        <h1 className="section-heading section-4-heading">Contact Me</h1>
        <form className="contact-form center">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Submit" className="contact-form-btn" />
        </form>
      </section>
      {/* <!-- End of Section 4 --> */}
    </>
  );
};

export default Contact;

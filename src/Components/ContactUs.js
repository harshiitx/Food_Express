const ContactUs = () => {
  return (
    <main id="ContactUs" role="main" aria-label="Contact information">
      <h1 role="heading" aria-level="1">Contact Us</h1>
      <p role="text">
        If you have any questions or need assistance, please feel free to reach
        out to me. 
      </p>

      <section role="region" aria-label="Contact details">
        <p role="text">
          <strong>Email:</strong> <a href="mailto:support@foodexpress.com" aria-label="Send email to support@foodexpress.com">support@foodexpress.com</a>
          <br />
          <strong>Phone:</strong> <a href="tel:+917239000000" aria-label="Call +91 7239000000">+91 7239000000</a>
          <br />
          <strong>Address:</strong> <span aria-label="Physical address: 12 Food Street, Karauli, Rajasthan, India">12 Food Street, Karauli, Rajasthan, India</span>
        </p>
      </section>
    </main>
  );
};

export default ContactUs;

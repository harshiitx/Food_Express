const Feedback = () => {


  return (
    <main id="Feedback" role="main" aria-label="Feedback form">
      <h1 role="heading" aria-level="1">Feedback</h1>
      <p role="text">
        We value your feedback as it helps us improve our services and provide
        you with the best possible experience. Please fill out the form below to
        share your thoughts.
      </p>
      <form role="form" aria-label="Customer feedback form">
        <div role="group">
          <label htmlFor="name" aria-required="true">Name:</label>
          <input
            type="text"
            id="name"
            required
            aria-describedby="name-help"
            aria-label="Enter your full name"
          />
          <div id="name-help" className="sr-only">
            Please enter your full name for the feedback
          </div>
        </div>
        <div role="group">
          <label htmlFor="message" aria-required="true">Message:</label>
          <textarea
            id="message"
            required
            aria-describedby="message-help"
            aria-label="Enter your feedback message"
          ></textarea>
          <div id="message-help" className="sr-only">
            Please provide detailed feedback about your experience
          </div>
        </div>
        <button type="submit" aria-label="Submit feedback form">Submit</button>
      </form>
    </main>
  );
};

export default Feedback;

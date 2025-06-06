import { useContext } from "react";
import { Link } from "react-router";
import DateContext from "../utils/DateContext";

const About = () => {
  const {date}= useContext(DateContext);
  return (
    <main id="About" role="main" aria-label="About Food Express">
      <div className="header-date" role="status" aria-label={`Current date: ${date}`}>
        Date: {date}
      </div>
      <h1 role="heading" aria-level="1">About Us</h1>
      <section role="region" aria-label="Company introduction">
        <p role="text">
          Welcome to my food ordering website! My name is Harshit Bhardwaj, and I
          created this platform during my exciting journey of learning React JS.{" "}
        </p>
        <p role="text">
          You can enjoy delicious meals at the comfort of your home. We provide a
          variety of dishes, ranging from desi gems to exotic dishes, to bring you
          a wide selection of options to suit every taste and preference.
        </p>
        <p role="text">
          Whether you're craving your favorite dishes or discovering new cuisines,
          this webapp strive to make your dining experience as convenient and
          delightful as possible. Thank you for visiting this page and becoming a
          part of my learning process. Your feedback is invaluable to me.
        </p>
        <p role="text">
          You can provide your feedback here:{" "}
          <Link to="/feedback" className="links" aria-label="Go to feedback page to share your thoughts">Feedback</Link>{" "}
        </p>
      </section>
      <section role="region" aria-label="Future development plans">
        <p role="text">
          As a learner, I will continue to enhance this platform by incorporating
          user feedback and implementing new sections. This journey has will
          include several phases like from refining app interface to expanding our
          range of features, and adding backend services later.
        </p>
        <p role="text">
          Bon appétit! I hope you enjoy your meals and have a wonderful dining
          experience with us. Thank you for being a part of this journey.
        </p>
      </section>
    </main>
  );
};

export default About;

import { Link } from "react-router";

const About = () => {
  return (
    <div id="About">
      <h1>About Us</h1>
      <p>
        Welcome to my food ordering website! My name is Harshit Bhardwaj, and I
        created this platform during my exciting journey of learning React JS.{" "}
      </p>
      <p>
        You can enjoy delicious meals at the comfort of your home. We provide a
        variety of dishes, ranging from desi gems to exotic dishes, to bring you
        a wide selection of options to suit every taste and preference.
      </p>
      <p>
        Whether you're craving your favorite dishes or discovering new cuisines,
        this webapp strive to make your dining experience as convenient and
        delightful as possible. Thank you for visiting this page and becoming a
        part of my learning process. Your feedback is invaluable to me.
      </p>
      <p>
        You can provide your feedback here:{" "}
        <Link to="/feedback" className="links">Feedback</Link>{" "}
      </p>
      <p>
        As a learner, I will continue to enhance this platform by incorporating
        user feedback and implementing new sections. This journey has will
        include several phases like from refining app interface to expanding our
        range of features, and adding backend services later.
      </p>

      <p>
        Bon appétit! I hope you enjoy your meals and have a wonderful dining
        experience with us. Thank you for being a part of this journey.
      </p>
    </div>
  );
};

export default About;

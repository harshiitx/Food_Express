import { Link } from 'react-router';
const Footer = () => {
  return (<div id="Footer">
    <Link className='links' to="/about" aria-label="About Us">About Us</Link>
    <Link className='links' to="/contact" aria-label="Contact Us">Contact Us</Link>
    <Link className='links' to="/feedback" aria-label="Feedback">Feedback</Link>
  </div>)
};
export default Footer;

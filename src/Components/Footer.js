import {Link} from 'react-router';
const Footer = () => {
  return (
    <footer id="Footer" role="contentinfo" aria-label="Site footer navigation">
      <Link className='links' to="/about" aria-label="Learn more about Food Express">About Us</Link>
      <Link className='links' to="/contact" aria-label="Contact Food Express support">Contact Us</Link>
      <Link className='links' to="/feedback" aria-label="Provide feedback about Food Express">Feedback</Link>
    </footer>
  )
};
export default Footer;

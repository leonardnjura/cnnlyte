import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footer_content = (

    <div className="container">
      <div className="row padme">
        <div className="col-sm-4">
          <ul>
          <li><Link to="/" className='cnn'>Home</Link></li>
          <li><Link to="/about" className='cnn'>About</Link></li>
            <li><Link to="/contact" className='cnn'>Join Us</Link></li>
          </ul>
        </div>
        <div className="col-sm-4">
        <ul>
          <li><Link to="/" className='cnn'>Breaking News</Link></li>
          <li><Link to="/about" className='cnn'>Reporters</Link></li>
            <li><Link to="/contact" className='cnn'>Contact</Link></li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul>
            <li>CNN Lyte &copy; 2018</li>
            <li>
              <a className="facebook" href="https://facebook.com"><i className="fa fa-facebook-square"></i></a>
              {' '}
              <a className="twitter" href="https://twitter.com"><i className="fa fa-twitter-square"></i></a>
              {' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <div className='footer'>
        {footer_content}
    </div>
  );
};
export default Footer;

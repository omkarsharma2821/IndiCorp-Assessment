import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site-footer mt-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
              With our tool management system, you can easily add all your tools to the platform and manage them efficiently. Whether you need to track the status, report issues, or check availability, our system provides a streamlined way to keep everything organized. Just click the 'Add Your Tools' button to get started and ensure your tools are always accounted for and in good condition. Managing your tools has never been easier—start now and experience the convenience of hassle-free tool management!
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="/browsetool">Home</a>
                </li>
                <li>
                  <a href="/browsetool">Modern Tools</a>
                </li>
                <li>
                  <a href="/browsetool">Browse Furniture</a>
                </li>
                <li>
                  <a href="/addtool">Add Tools</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/home">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/view">View Tools</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2024 All Rights Reserved by
                <a href="/"> GearGuard</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="github"
                    href="https://github.com/omkarsharma2821"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://instagram.com/omkarsharmaa_"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/omkarsharmaa/"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

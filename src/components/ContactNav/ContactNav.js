import React from 'react';

export default function ContactNav() {
  return (
    <div className="top-line-two">
      <div className="container" />
      <div className="row">
        <div className="col-md-9 col-sm-6">
          <div className="welcome">
            <ul style={{ color: 'black' }}>
              <li>
                <i className="fa fa-envelope" aria-hidden="true" />
                contact@gwbuildings.com
              </li>
              <li>
                <i className="fa fa-globe" aria-hidden="true" />
                3033 S. Parker Road Denver, Colorado 80014
              </li>

              <li>
                <a href="https://www.facebook.com/greatwesternsteel/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/greatwesternsteel/">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="https://twitter.com/great_systems">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/company/great-western-building-systems">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="https://www.pinterest.com/GrtWesternBldgs/">
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="https://www.houzz.com/ideabooks/86965744/list/metal-building-home">
                  <i className="fa fa-houzz" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="social-icons">
            <ul>
              <li
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.6em',
                  marginTop: '4px',
                }}
              >
                <a
                  style={{
                    fontWeight: 'bold',
                    fontSize: 'inherit',
                    color: '#333',
                    textDecoration: 'none',
                  }}
                  href="tel:18004972135"
                >
                  +1 (800) 497-2135
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

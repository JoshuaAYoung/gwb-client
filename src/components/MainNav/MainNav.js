import React from 'react';

export default function MainNav() {
  return (
    <section className="main-menu-one finance-navbar not-home">
      <div className="container" style={{ width: '100%', maxWidth: '1350px' }}>
        <div className="row">
          <div className="col-md-1">
            <div className="logo">
              <a href="https://greatwesternbuildings.com/">
                <img
                  src="./Steel Building Paint Color Options - Great Western Steel Building Systems_files/1566256192204.png"
                  alt="img"
                />
              </a>
              <a
                id="nav-phone-link"
                style={{
                  fontWeight: 'bold',
                  fontSize: 'inherit',
                  color: 'white',
                  textDecoration: 'none',
                  maxWidth: '200px',
                  margin: '0 auto',
                  marginTop: '-38px',
                }}
                href="tel:18004972135"
              >
                +1 (800) 497-2135
              </a>
            </div>
          </div>
          <div className="col-md-8" style={{ zIndex: '2' }}>
            <nav id="main-navigation-wrapper" className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#main-navigation"
                  aria-expanded="false"
                  className="navbar-toggle collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>

              <div id="main-navigation" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="https://greatwesternbuildings.com/">Home</a>
                  </li>
                  <li>
                    <a href="https://greatwesternbuildings.com/steel-buildings">
                      Steel Buildings
                      <button className="dopdown-nav-toggler" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </a>
                    <ul className="dropdown-submenu">
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/agricultural">
                          Agricultural Buildings
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/airplane-hangars-and-aviation">
                          Airplane Hangars and Aviation
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/churches-and-religious-buildings">
                          Churches and Religious Buildings
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/commercial-buildings">
                          Commercial Buildings
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/government-buildings">
                          Government Buildings
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/industrial-structures">
                          Industrial Structures
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/storage-and-mini-storage">
                          Storage Buildings
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/homes-and-residential-barndominiums">
                          Homes and Residential Buildings
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/garages-and-shops">
                          Garages and Shops
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/warehouses">
                          Warehouses
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/riding-arenas">
                          Riding Arenas
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://greatwesternbuildings.com/steel-buildings/features">
                      Features
                      <button className="dopdown-nav-toggler" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </a>
                    <ul className="dropdown-submenu">
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/frame-styles">
                          Building Frame Styles
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/paint-colors">
                          Paint Colors
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/primary-structural-framing">
                          Structural Framing
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/secondary-framing">
                          Secondary Framing
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/roof-systems">
                          Roof Systems
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/wall-panels">
                          Wall Panels
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/insulation">
                          Steel Building Insulation
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/features/architectural-renderings">
                          Architectural Renderings
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a
                          className="submenu-toggle"
                          tabIndex="-1"
                          href="https://greatwesternbuildings.com/steel-buildings/features/paint-colors#"
                        >
                          Custom Sizes&nbsp;&nbsp;
                          <i className="fa fa-caret-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/30x50"
                            >
                              30x50 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/40x60"
                            >
                              40x60 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/50x80"
                            >
                              50x80 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/60x100"
                            >
                              60x100 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/80x120"
                            >
                              180x120 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/120x200"
                            >
                              120x200 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/200x400"
                            >
                              200x400 Building
                            </a>
                          </li>
                          <li>
                            <a
                              tabIndex="-1"
                              href="https://greatwesternbuildings.com/steel-buildings/sizes/250x400"
                            >
                              250x400 Building
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://greatwesternbuildings.com/steel-buildings/projects">
                      Our Projects
                    </a>
                  </li>

                  <li>
                    <a href="https://greatwesternbuildings.com/steel-buildings/usa">
                      Regional
                      <button className="dopdown-nav-toggler" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </a>
                    <ul className="dropdown-submenu">
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/west-coast">
                          West Coast
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/pacific-northwest">
                          Pacific Northwest
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/southwest">
                          Southwest
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/midwest">
                          Midwest
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/gulf-coast">
                          Gulf Coast
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/great-lakes">
                          Great Lakes
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/south">
                          Southeast
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/mid-atlantic">
                          Mid Atlantic
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/steel-buildings/usa/new-england">
                          New England
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://greatwesternbuildings.com/great-western-steel-buildings">
                      About
                      <button className="dopdown-nav-toggler" type="button">
                        <span className="sr-only">Toggle navigation</span>{' '}
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </a>
                    <ul className="dropdown-submenu">
                      <li>
                        <a href="https://greatwesternbuildings.com/great-western-steel-buildings/engineering">
                          Engineering
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/great-western-steel-buildings/detailing">
                          Detailing
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/great-western-steel-buildings/permits">
                          Permits
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/great-western-steel-buildings/oem-manufacturing">
                          OEM Manufacturing
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/great-western-steel-buildings/our-process">
                          Our Process
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="https://greatwesternbuildings.com/builders">
                      Builder Network
                      <button className="dopdown-nav-toggler" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </a>
                    <ul
                      className="dropdown-submenu"
                      style={{ backgroundColor: 'black' }}
                    >
                      <li>
                        <span
                          className="footer-hide"
                          style={{
                            fontSize: '9px',
                            backgroundColor: '#636363',
                            display: 'block',
                            textAlign: 'right',
                            padding: '4px 7px',
                            fontWeight: 'bold',
                            color: 'white',
                            letterSpacing: '1px',
                          }}
                        >
                          BETA
                        </span>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/builders/">
                          Find Contractors
                        </a>
                      </li>
                      <li>
                        <a href="https://greatwesternbuildings.com/builders/join">
                          Join the Network
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://greatwesternbuildings.com/great-western-steel-buildings/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-3">
            <div className="button-wraper pull-right">
              <div className="button">
                <a
                  className="nav-quote-button"
                  href="https://greatwesternbuildings.com/custom-building-price-quote"
                >
                  REQUEST A QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

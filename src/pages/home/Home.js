import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import GitHubButton from 'react-github-btn';

import { paths } from "../../lib/routes";
import ThemesbergLogoIcon from "../../assets/img/themesberg.svg";
import ThemesbergLogo from "../../assets/img/themesberg-logo.svg";
import MockupPresentation from "../../assets/img/mockup-presentation.png";
import ReactHero from "../../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../../assets/img/mockup-map-presentation.png";
import CalendarImg from "../../assets/img/mockup-calendar-presentation.png";
import BS5IllustrationsImg from "../../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../../assets/img/technologies/react-logo.svg";


export default function Home(){

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };
  
  const features =  [
    {
        "id": 0,
        "title": "React.js",
        "icon": faReact,
        "description": "The most popular front-end library in the world"
    },
    {
        "id": 1,
        "title": "Bootstrap 5",
        "icon": faBootstrap,
        "description": "Built with the most popular CSS Framework"
    }]

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className=" navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Volt React</span>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={Link} to="#pages">Pages</Nav.Link>
                <Nav.Link as={Link} to={paths.LOGIN}>Login</Nav.Link>
                <Nav.Link as={Link} to={paths.REGISTER}>Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Volt React Dashboard</h1>
              <p className="text-muted fw-light mb-5 h5">Open source powered by React.js and Bootstrap 5</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={paths.LOGIN} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">10</h3>
              <p className="text-gray">Example Pages</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">100+</h3>
              <p className="text-gray">React Components</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Workflow</h3>
              <p className="text-gray">Sass & react-app</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Bootstrap 5</h3>
              <p className="text-gray">CSS Framework</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Calendar <Badge pill bg='secondary' text="dark" className="badge-md ms-3 mb-0 fs-6">Pro</Badge></h2>
              <p className="mb-3 lead fw-bold">
                Advanced FullCalendar.js integration
              </p>
              <p className="mb-4">
                We created a fully editable calendar where you can add, edit and delete events for your admin dashboard.
              </p>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/calendar" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Demo Calendar</Button>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/plugins/calendar" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Guide</Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Bootstrap 5</h2>
              <p className="mb-3 lead fw-bold">
                Latest version of Bootstrap 5
              </p>
              <p className="mb-4">
                Volt React is built using the latest version of Bootstrap 5 and we only used Vanilla Javascript for everything including the plugins
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Awesome Features</h2>
              <p className="lead px-lg-8">You get all React.js components fully customized. Besides, you receive numerous plugins out of the box and ready to use.</p>
            </Col>
          </Row>
          <Row>
            {features.map(feature => <Feature key={`features-${feature.id}`} {...feature} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-white">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="h5 text-gray fw-normal mb-4">Available in the following technologies:</h2>
              <div>
                <p>
                We created a fully editable calendar where you can add, edit and delete events for your admin dashboard.
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Volt React</span>
              </Navbar.Brand>
              <p>Volt React is a free and open source admin dashboard template powered by React.js and Bootstrap 5.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog">Blog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products">Products</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about">About Us</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">Contact Us</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={paths.LOGIN} target="_blank">Getting started</Card.Link>
                </li>
                <li><Card.Link as={Link} to={paths.LOGIN} target="_blank">Changelog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">License</Card.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

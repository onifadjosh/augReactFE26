import { Container, Row, Col, Button, Nav } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-white py-5 border-top">
      <Container>
        {/* Call to action section */}
        <Row className="mb-5 pb-3">
          <Col lg={8} md={7} className="d-flex flex-column justify-content-center">
            <h2 className="display-6 fw-normal mb-0">
              Want to deliver high-quality audio to your fans, wherever they are?
            </h2>
          </Col>
          <Col lg={4} md={5} className="d-flex align-items-center gap-3 mt-3 mt-md-0">
            <Button 
              variant="outline-dark" 
              className="px-4 py-2 rounded-pill fw-semibold"
            >
              View plans
            </Button>
            <Button 
              variant="dark" 
              className="px-4 py-2 rounded-pill fw-semibold"
            >
              Get started free
            </Button>
          </Col>
        </Row>

        {/* Brand and links section */}
        <Row className="align-items-center">
          <Col md={3} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-3">
              <div className="fs-2 fw-bold" style={{ letterSpacing: '-0.5px' }}>
                Mixlr
              </div>
              {/* Social Icons */}
              <div className="d-flex gap-2">
                <a 
                  href="#" 
                  className="text-dark text-decoration-none"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f fs-6"></i>
                </a>
                <a 
                  href="#" 
                  className="text-dark text-decoration-none"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter fs-6"></i>
                </a>
                <a 
                  href="#" 
                  className="text-dark text-decoration-none"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram fs-6"></i>
                </a>
                <a 
                  href="#" 
                  className="text-dark text-decoration-none"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube fs-6"></i>
                </a>
              </div>
            </div>
          </Col>

          <Col md={6} className="mb-3 mb-md-0">
            <Nav className="justify-content-center gap-4">
              <Nav.Link href="#" className="text-dark text-decoration-none px-0">
                Pricing
              </Nav.Link>
              <Nav.Link href="#" className="text-dark text-decoration-none px-0">
                Blog
              </Nav.Link>
              <Nav.Link href="#" className="text-dark text-decoration-none px-0">
                Support
              </Nav.Link>
              <Nav.Link href="#" className="text-dark text-decoration-none px-0">
                Careers
              </Nav.Link>
              <Nav.Link href="#" className="text-dark text-decoration-none px-0">
                Terms of Use
              </Nav.Link>
              <Nav.Link href="#" className="text-dark text-decoration-none px-0">
                Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3} className="text-md-end">
            <div className="text-muted small">
              © Mixlr Ltd 2024 - All rights reserved
            </div>
          </Col>
        </Row>

        {/* Cookie consent bar */}
        <Row className="mt-4 pt-3 border-top">
          <Col className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span className="text-muted small">
              By using our services, you agree to our use of cookies
            </span>
            <Button 
              variant="outline-secondary" 
              size="sm" 
              className="rounded-pill px-4"
            >
              Ok
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
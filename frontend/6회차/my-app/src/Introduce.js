import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

function App() {
  return (
    <> 
      <Navbar className="justify-content-center" sticky="top" >
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT Byeongguk</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto"  >
          <Col className='text-end' style={{paddingTop:'40px'}}>
            <Image src="./choonsik.jpg" alt="프로필 사진" 
            style={{ border: '1px solid pink', width: 300}} roundedCircle/>
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p class="introducetext">
              # 강병국 <br />
              전기전자제어 전공 <br />
              nipa 취업캠프 중<br />
              <br />
              # 장점 <br />
              열정 열정 열정! <br />
              <br />
              # 단점 <br />
              극 I
              극 T <br />
              집돌이 <br />
            </p>
            </Col>
        </Row>
      </Container>
      <Container id="portfolio">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <div class='slide-box'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./clock.png"
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./choonsik_lotto.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./list.png"
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        </Row>
      </Container>
      <Container id="contact">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ borderBottom: '1px solid white', margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>57415a@naver.com</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{borderBottom: '1px solid white', margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-9395-2657</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{  borderBottom: '1px solid white',margin: 0, padding: 3 }}>GIT</h3>
            <p style={{ margin: 0, padding: 10 }}>https://github.com/kkook1234</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; Byeongguk Kang. All Right Reserved.
          </Row>
      </Container>
    </>
  );
}

export default App;
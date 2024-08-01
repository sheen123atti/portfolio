import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export default function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <img src={logo} alt='logo' />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/sheen-7b53291b7/'><img src={navIcon1} /></a>
                        <a href='https://www.facebook.com/'><img src={navIcon2} /></a>
                        <a href='https://www.instagram.com/'><img src={navIcon3} /></a>
                        <p>&copy;CopyRight 2024. All Right Reserved</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

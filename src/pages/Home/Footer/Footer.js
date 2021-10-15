import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import footerlogo from '../../../Images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col><img className='w-75' src={footerlogo} alt="" /></Col>
                    <Col>
                        <p className='text-start'>About Online Food</p>
                        <p className='text-start'>Rate Our Blog</p>
                        <p className='text-start'>Sign up to deliver</p>
                        <p className='text-start'>Add your restaurant</p>
                    </Col>
                    <Col>
                        <p className='text-start'>Get Help</p>
                        <p className='text-start'>React faqs</p>
                        <p className='text-start'>View all cities</p>
                        <p className='text-start'>restaurants near me</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
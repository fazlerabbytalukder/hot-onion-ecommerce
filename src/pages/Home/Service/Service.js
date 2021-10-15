import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './service.css';

const Service = (props) => {
    const { servicename, details, img } = props.service;
    return (
        <div>
            <Col>
            <Card className='shadow rounded-card mb-5'>
                    <Card.Img className=' mx-auto' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{servicename}</Card.Title>
                    <Card.Text>
                            <p>{details}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div>
    );
};

export default Service;
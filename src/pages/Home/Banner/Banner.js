import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className='banner-iamge' sm={12} lg={12} md={12}>
                        <h1 className='mb-5 mt-5'>Best food waiting for your belly</h1>
                        <InputGroup className="margins mx-auto w-50">
                            <FormControl
                                placeholder="Search Your Food"
                                aria-label="Search Your Food"
                                aria-describedby="basic-addon2"
                                className='rounded-pill'
                            />
                            <Button className='signup-button rounded-pill'>
                                Button
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
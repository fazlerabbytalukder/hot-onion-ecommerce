import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleFood = (props) => {
    const { breakfastname, details, img, price } = props.food;
    return (
        <div>
            <Col>
            <Card className='shadow h-100'>
                    <Card.Img className='w-50 mx-auto my-3' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{breakfastname}</Card.Title>
                    <Card.Text>
                            <p>{details.slice(0,30)}</p>
                            <h4>$ {price}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </div>
    );
};

export default SingleFood;
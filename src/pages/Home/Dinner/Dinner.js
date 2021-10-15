import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleFood from '../singleFood/SingleFood';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('./dinnerdata.json')
            .then(res => res.json())
            .then(data => setDinners(data));
    }, [])
    return (
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
            {
                dinners.map(dinner => <SingleFood key={dinner.id} food={dinner}></SingleFood>)
            }
            </Row>
        </div>
    );
};

export default Dinner;
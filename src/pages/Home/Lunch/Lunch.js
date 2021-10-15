import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleFood from '../singleFood/SingleFood';

const Lunch = () => {
    const [lunchs, setLunchs] = useState([]);

    useEffect(() => {
        fetch('./lunchdata.json')
            .then(res => res.json())
            .then(data => setLunchs(data));
    }, [])
    return (
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
            {
                lunchs.map(lunch => <SingleFood key={lunch.id} food={lunch}></SingleFood>)
            }
            </Row>
        </div>
    );
};

export default Lunch;
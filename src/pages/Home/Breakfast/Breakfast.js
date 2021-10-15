import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleFood from '../singleFood/SingleFood';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);

    useEffect(() => {
        fetch('./breakfastdata.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data));
    }, [])
    return (
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
            {
                breakfasts.map(breakfast => <SingleFood key={breakfast.id} food={breakfast}></SingleFood>)
            }
            </Row>
        </div>
    );
};

export default Breakfast;
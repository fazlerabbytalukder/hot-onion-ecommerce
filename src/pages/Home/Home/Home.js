import React from 'react';
import Banner from '../Banner/Banner';
import FoodMenu from '../FoodMenu/FoodMenu';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodMenu></FoodMenu>
            <WhyChoose></WhyChoose>
            <Services></Services>
        </div>
    );
};

export default Home;
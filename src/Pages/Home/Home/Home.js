import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
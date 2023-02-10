import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <p className='bg-black text-center font-semibold text-sm text-stone-300 py-3'>We've extended our returns period to 60 days</p>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
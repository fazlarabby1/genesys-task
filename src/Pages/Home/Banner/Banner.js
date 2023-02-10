import React from 'react';
import bannerBg from '../../../assets/Banner.png';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgb(0,0,0,0.25)',
                backgroundBlendMode: 'overlay'
            }}
            className='h-[350px] md:h-[720px] bg-cover'
            >
            <div className='flex flex-col items-center justify-center'>
                <h1 className='mt-16 lg:mt-[125px] text-3xl md:text-8xl text-center font-bold text-white'>Sports Clothing & <br /> Fitness Equipment <br /> Shopify Theme</h1>
                <button className="mt-[60px] btn btn-primary rounded-none text-lg text-white font-normal">View Shop</button>
            </div>
        </div>
    );
};

export default Banner;
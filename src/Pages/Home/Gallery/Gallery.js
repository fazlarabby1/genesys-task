import React from 'react';
import gallery from '../../../assets/gallery.png';
import gallery1 from '../../../assets/Gallery/Image 1.png';
import gallery2 from '../../../assets/Gallery/Image 2.png';
import gallery3 from '../../../assets/Gallery/Image 3.png';
import gallery4 from '../../../assets/Gallery/Image 4.png';
import gallery5 from '../../../assets/Gallery/Image 5.png';

const Gallery = () => {
    return (
        <div className='bg-black pt-20'>
            <div className='flex justify-center'>
                <img src={gallery} alt="" />
            </div>
            <h1 className='text-center text-[56px] text-stone-200'>INSTAGRAM</h1>
            <div className='mt-5 lg:mx-[70px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
            </div>
            <hr className='mx-[70px] mt-20 opacity-50' />
        </div>
    );
};

export default Gallery;
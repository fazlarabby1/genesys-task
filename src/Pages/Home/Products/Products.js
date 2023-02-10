import React from 'react';
import whatsImg from '../../../assets/whats_new.png';
import product1 from '../../../assets/products/Product 1.png';
import product2 from '../../../assets/products/Product 2.png';
import product3 from '../../../assets/products/Product 3.png';
import product4 from '../../../assets/products/Product 4.png';
import ProductCard from './ProductCard';


const Products = () => {
    const productData = [
        {
            id: 1,
            image: product1,
            title: 'Rogue HG 2.0 Bumper Plates',
            price: '$409',
            newPrice: '$300'
        },
        {
            id: 2,
            image: product2,
            title: 'The Ohio Bar - Cerakote',
            price: '$300'
        },
        {
            id: 3,
            image: product3,
            title: 'Rogue Adjustable Bench 3.0',
            price: '$300'
        },
        {
            id: 4,
            image: product4,
            title: 'Rogue USA Nylon Lifting Belt',
            price: '$60',
            newPrice: '$30'
        },
    ]
    return (
        <div className='mt-20'>
            <div className='flex justify-center'>
                <img src={whatsImg} alt="" />
            </div>
            <div className='mb-[72px]'>
                <h1 className='font-bold text-[56px] text-center'>SHOP THE LATEST</h1>
                <p className='text-center text-gray-500 md:w-3/6 mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur</p>
            </div>
            <div className="flex justify-end mr-5 mb-6">
                <p className="btn btn-xs bg-black rounded-none">❮</p>
                <p className="btn btn-xs bg-black rounded-none">❯</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    productData.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
            <div className='flex justify-center mt-16 mb-24'>
                <button className='btn btn-outline rounded-none'>View All Products</button>
            </div>
        </div>
    );
};

export default Products;
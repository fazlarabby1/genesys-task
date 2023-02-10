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
            img: "DK",
            title: 'Rogue HG 2.0 Bumper Plates',
            price: '$409',
            newPrice: '$300'
        },
        {
            id: 2,
            img: "DK",
            title: 'The Ohio Bar - Cerakote',
            price: '$300'
        },
        {
            id: 3,
            img: "DK",
            title: 'Rogue Adjustable Bench 3.0',
            price: '$300'
        },
        {
            id: 4,
            img: "DK",
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
            <h1 className='font-bold text-[56px] text-center'>SHOP THE LATEST</h1>

            <div>
                {
                    productData.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;
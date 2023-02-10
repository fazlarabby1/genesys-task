import React from 'react';

const ProductCard = ({ product }) => {
    const { image, title, price } = product;
    return (
        <div className="card bg-base-100">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="mt-6 ml-4">
                <h2 className="text-base font-semibold">{title}</h2>
                <p className='font-semibold text-xl'><span className={product.newPrice ? 'line-through text-gray-500 text-base' : ''}>{price}</span> <span className='text-red-400'>{product.newPrice ? product.newPrice : ''}</span></p>
            </div>
        </div>
    );
};

export default ProductCard;
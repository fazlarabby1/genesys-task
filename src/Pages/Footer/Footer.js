import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer lg:p-10 md:pt-5 md:pl-5 bg-black text-white">
            <div className='lg:ml-12 pl-2 md:pl-0'>
                <h1 className='font-bold text-4xl mt-10 sm:mt-0'>LOGO.</h1>
                <p className='mt-4 opacity-50'>Be the first who learns about our <br />
                    great promotions!</p>
                <div className='mt-14'>
                    <p className='font-semibold text-xl mb-[18px]'>FOLLOW US</p>
                    <div>
                        <p className='btn btn-outline hover:btn-primary btn-sm rounded-sm mr-4'>
                            <FaTwitter className='text-base text-white' />
                        </p>
                        <p className='btn btn-outline hover:btn-primary btn-sm rounded-sm mr-4'>
                            <FaFacebookF className='text-base text-white' />
                        </p>
                        <p className='btn btn-outline hover:btn-primary btn-sm rounded-sm'>
                            <FaInstagram className='text-base text-white' />
                        </p>
                    </div>
                </div>
            </div>
            <div className='pl-2 md:pl-0'>
                <span className="text-xl font-semibold">Products</span>
                <a href='/' className="link link-hover opacity-50">New Arrival</a>
                <a href='/' className="link link-hover opacity-50">Best Seller</a>
                <a href='/' className="link link-hover opacity-50">On Sale</a>
                <a href='/' className="link link-hover opacity-50">All Collection</a>
            </div>
            <div className='pl-2 md:pl-0'>
                <span className="text-xl font-semibold">Category</span>
                <a href='/' className="link link-hover opacity-50">Barbells</a>
                <a href='/' className="link link-hover opacity-50">Plates</a>
                <a href='/' className="link link-hover opacity-50">Benches</a>
                <a href='/' className="link link-hover opacity-50">Apparel</a>
                <a href='/' className="link link-hover opacity-50">Straps & Supports</a>
            </div>
            <div className='pl-2 md:pl-0'>
                <span className="text-xl font-semibold">Info</span>
                <a href='/' className="link link-hover opacity-50">About</a>
                <a href='/' className="link link-hover opacity-50">Blog</a>
                <a href='/' className="link link-hover opacity-50">Feature</a>
                <a href='/' className="link link-hover opacity-50">Store Location</a>
                <a href='/' className="link link-hover opacity-50">Terms & Conditions</a>
                <a href='/' className="link link-hover opacity-50">Privacy Policy</a>
            </div>

            <div className="form-control w-80 pl-2 md:pl-0 pb-3 md:pb-0">
                <h1 className='mb-3 text-xl font-semibold'>SUBSCRIBE</h1>
                <p className='font-normal opacity-50 mb-14'>Subscribe our newsletter and get <br />
                    discount 30% off</p>
                <div className="relative">
                    <input type="text" placeholder="Enter your email..." className="input bg-transparent border-white rounded-none w-full pr-16 opacity-50" />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-none">Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
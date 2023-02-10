import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <span className="text-xl font-semibold">Products</span>
                <a href='/' className="link link-hover opacity-50">Branding</a>
                <a href='/' className="link link-hover opacity-50">Design</a>
                <a href='/' className="link link-hover opacity-50">Marketing</a>
                <a href='/' className="link link-hover opacity-50">Advertisement</a>
            </div>
            <div>
                <span className="text-xl font-semibold">Category</span>
                <a href='/' className="link link-hover opacity-50">About us</a>
                <a href='/' className="link link-hover opacity-50">Contact</a>
                <a href='/' className="link link-hover opacity-50">Jobs</a>
                <a href='/' className="link link-hover opacity-50">Press kit</a>
            </div>
            <div>
                <span className="text-xl font-semibold">Info</span>
                <a href='/' className="link link-hover opacity-50">Terms of use</a>
                <a href='/' className="link link-hover opacity-50">Privacy policy</a>
                <a href='/' className="link link-hover opacity-50">Cookie policy</a>
            </div>
            
                <div className="form-control w-80">
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
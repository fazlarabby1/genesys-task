import React from 'react';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = <React.Fragment>
        <li><Link className='btn btn-ghost' to='/'>Home</Link></li>
        <li><Link className='btn btn-ghost' to='/'>Shop</Link></li>
        <li><Link className='btn btn-ghost' to='/'>About</Link></li>
        <li><Link className='btn btn-ghost' to='/login'>LogIn</Link></li>
        <li><Link className='btn btn-ghost' to='/'>Feature</Link></li>
        <li><Link className='btn btn-ghost' to='/'>Contacts</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 lg:px-10">
            <div className=''>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {navItems}
                    </ul>
                </div>
            </div>
            <a href='/' className="btn btn-ghost font-bold text-4xl">LOGO.</a>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end md:navbar-end md:w-full gap-6">
                    <FaSearch />
                    <FaRegUser />
                    <RiShoppingBag3Line />
            </div>
        </div>
    );
};

export default Navbar;
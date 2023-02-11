import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className='h-[640px] flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-10'>Reset your password</h1>
                <p className='font-normal text-base opacity-50 mb-6'>We'll send you an email to reset your password.</p>
                <form>
                    <div className="form-control w-full max-w-xs mb-8">
                        <label className="label">
                            <span className="font-semibold">Email</span>
                        </label>
                        <input
                            type="email" placeholder="your@email.com" className="input input-bordered rounded-none w-full md:w-[400px]" />
                    </div>
                    <input type="submit" value='Reset' className='btn btn-primary rounded-none text-white' />
                    <Link to='/' className="font-normal text-sm text-primary ml-6">Cancel</Link>
                </form>
                <div className='mt-12'>
                    <h1 className='text-2xl font-bold'>New Customer</h1>
                    <p className='font-normal w-full md:w-[450px] my-6'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                    <Link to='/signup' className='btn bg-teal-400 text-white rounded-none border-none hover:bg-success'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LogIn = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');
    return (
        <div className='h-[750px] flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-10'>Log in</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs mb-8">
                        <label className="label">
                            <span className="font-semibold">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="your@email.com" className="input input-bordered rounded-none w-full md:w-[400px]" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-[60px]">
                        <label className="label">
                            <span className="font-semibold">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="***********" className="input input-bordered rounded-none w-full md:w-[400px]" />
                    </div>
                    <input type="submit" value='LOGIN' className='btn btn-primary rounded-none text-white' />
                    <span className="font-normal text-sm text-primary ml-6">Forget Password?</span>
                </form>
                <div className='mt-12'>
                    <h1 className='text-2xl font-bold'>New Customer</h1>
                    <p className='font-normal w-full md:w-[450px] my-6'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                    <button className='btn bg-teal-400 text-white rounded-none border-none hover:bg-success'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
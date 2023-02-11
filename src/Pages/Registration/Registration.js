import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registration = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    }
    return (
        <div className='h-[850px] flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-10'>Sign up</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs mb-8">
                        <label className="label">
                            <span className="font-semibold">First Name</span>
                        </label>
                        <input {...register("fName",
                            { required: 'First Name is required' })}
                            type="text" placeholder="Enter your first name" className="input input-bordered rounded-none w-full md:w-[400px]" />
                        {errors.email && <p className='text-red-600'>{errors.fName?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-8">
                        <label className="label">
                            <span className="font-semibold">Last Name</span>
                        </label>
                        <input {...register("lName",
                            { required: 'Last Name is required' })}
                            type="text" placeholder="Enter your first name" className="input input-bordered rounded-none w-full md:w-[400px]" />
                        {errors.email && <p className='text-red-600'>{errors.lName?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-8">
                        <label className="label">
                            <span className="font-semibold">Email</span>
                        </label>
                        <input {...register("email",
                            { required: 'Email is required' })}
                            type="email" placeholder="your@email.com" className="input input-bordered rounded-none w-full md:w-[400px]" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-[60px]">
                        <label className="label">
                            <span className="font-semibold">Password</span>
                        </label>
                        <input {...register("password",
                            {
                                required: "Password is required", minLength: { value: 6, message: "Password length must be above 6 characters" }
                            })}
                            type="password" placeholder="***********" className="input input-bordered rounded-none w-full md:w-[400px]" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" value='Register' className='btn btn-primary rounded-none text-white' />
                    <Link to='/login' className="font-normal text-sm text-primary ml-6">Already Have an Account?</Link>
                </form>
            </div>
        </div>
    );
};

export default Registration;
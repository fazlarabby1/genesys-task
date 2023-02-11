import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (data) => {
        const firstName = data.fName;
        const lastName = data.lName;
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => setSignUpError(err))
    }
    return (
        <div className='h-[850px] flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-10'>Sign up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                                required: "Password is required",
                                minLength: { value: 6, message: "Password length must be above 6 characters" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!#$%&?"])/, message: 'Password must contain at least one capital letter and a special character' }
                            })}
                            type="password" placeholder="***********" className="input input-bordered rounded-none w-full md:w-[400px]" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        {signUpError?.message && <p className='text-red-600'>{signUpError?.message}</p>}
                    </div>

                    <input type="submit" value='Register' className='btn btn-primary rounded-none text-white' />
                    <Link to='/login' className="font-normal text-sm text-primary ml-6">Already Have an Account?</Link>
                </form>
            </div>
        </div>
    );
};

export default Registration;
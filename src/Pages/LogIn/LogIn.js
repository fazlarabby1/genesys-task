import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';

const LogIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState('');
    const [logInEmail, setLogInEmail] = useState('');
    const [token] = useToken(logInEmail);

    if(token){
        navigate('/')
    }

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
        .then(result =>{
            setLogInEmail(email);
            toast.success('Successfully Logged In');
        })
        .catch(err => setLoginError(err))
    }

    return (
        <div className='h-[750px] flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold text-center mb-10'>Log in</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                required: "Password is required"
                            })}
                            type="password" placeholder="***********" className="input input-bordered rounded-none w-full md:w-[400px]" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        {loginError?.message && <p className='text-red-600'>{loginError?.message}</p>}
                    </div>
                    <input type="submit" value='LOGIN' className='btn btn-primary rounded-none text-white' />
                    <Link to='/resetPassword' className="font-normal text-sm text-primary ml-6">Forget Password?</Link>
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

export default LogIn;
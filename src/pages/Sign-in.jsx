// SignIn.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const Signin = () => {

    const ipStyle = "bg-gray-200 p-5 my-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Placeholder for form submission logic
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className='w-[300px]'>
                <h2 className=" text-2xl font-bold mb-4">Welcome Back</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">

                    </label>
                    <input
                        type="email"
                        placeholder='Email'
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={ipStyle}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    </label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            className={ipStyle}
                            required
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>
                <Link to="/sign-up" className='underline'>Forgot your password?</Link>
            </form>
        </div>
    );
};

export default Signin;

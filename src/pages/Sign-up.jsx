import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthFooter from '../Components/AuthFooter'

const Signup = () => {

    const ipStyle = "bg-gray-200 p-4 my-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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

    
    return (
        <div className="flex flex-col justify-between items-center h-screen">
            <form className='w-[300px] mt-20'>
                <h2 className=" text-2xl font-bold mb-10">Create an Account</h2>
                <div className="mb-4">
                    <label htmlFor="Firstname" className="block text-sm font-medium text-gray-700">

                    </label>
                    <input
                        type="Firstname"
                        placeholder='First name'
                        id="Firstname"
                        name="Firstname"
                        value={formData.Firstname}
                        onChange={handleChange}
                        className={ipStyle}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Secondname" className="block text-sm font-medium text-gray-700">

                    </label>
                    <input
                        type="Secondname"
                        placeholder='Second name'
                        id="Secondname"
                        name="Secondname"
                        value={formData.Secondname}
                        onChange={handleChange}
                        className={ipStyle}
                        required
                    />
                </div>
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
                <div className="tac flex">
                    <input type="checkbox" />
                    <p className='text-[12px] mx-4'>  By proceeding, I agree to all <span>T&C</span> and  <span>Privacy Policy</span></p>
                </div>
            </form>
            <AuthFooter btntext="Sign up" to="/sign-in" linktxt="Forgot your password?"/>
        </div>
    );
};

export default Signup

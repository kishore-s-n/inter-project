// Button.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PsButton = ({ to, className, onClick, children, customProp, ...restProps }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <button onClick={onClick} className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className}`} {...restProps}>
            {children}
            {customProp === 'password' && (
                <span onClick={togglePasswordVisibility} className="ml-2 cursor-pointer">
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
            )}
        </button>
    );
};

export default PsButton;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 flex items-center justify-center p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg"
      aria-label="Go back"
    >
      <IoArrowBack className="text-xl" />
    </button>
  );
};

export default BackButton;

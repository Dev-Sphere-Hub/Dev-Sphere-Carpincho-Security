import React from 'react';

const Button = ({ text, type, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={className}>
      <button
        type={type}
        className="w-full self-center font-button text-button bg-blue py-3 rounded-lg text-gray-50"
        onClick={handleClick}
      >
        <b>{text}</b>
      </button>
    </div>
  );
};

export default Button;

import { useState } from 'react'
import { BiError } from 'react-icons/bi'
const InputForm = ({
  label,
  placeholder,
  type,
  name, // Use name directly
  value,
  onChange,
  errorType,
  errorMessage
}) => {
  const [errorVisible, setErrorVisible] = useState(true);

  const hideError = () => {
    setErrorVisible(false);
  };

  return (
    <div className='flex flex-col m-auto max-w-sm'>
      <div
        className={`relative ${errorMessage && errorVisible ? 'pb-0' : 'pb-2 sm:pb-4'}`}
      >
        <label
          htmlFor={name}
          className='pb-[1%] font-medium flex text-gray-700'
        >
          {label}
        </label>
        <input
          className={`w-full ${errorType ? 'border-red-500' : ''} text-base font-medium border h-10 focus:outline-none rounded-lg pl-2 bg-slate-40 focus:bg-[#4ebeff21]`}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {errorMessage && errorVisible && (
          <div className='flex items-center'>
            <BiError className='text-red-600 mr-2' />
            <span className='text-red-600 text-sm font-medium'>
              {errorMessage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;

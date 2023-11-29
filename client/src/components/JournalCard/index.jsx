import React from 'react';

const JournalCard = () => {
    return (
        <div className="flex flex-col lg:w-full lg:h-full">
        <div className="flex flex-col justify-center max-w-full lg:h-full bg-transparent bg-opacity-80 drop-shadow-md rounded-2xl text-center text-neutral-900 h-[17rem]">
          <div
            className="w-full pl-[3%] px-[4%] justify-self-center self-center h-[9rem] lg:h-[14rem] max-w-md rounded-md flex-shrink-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="flex flex-col items-center self-center w-full h-[10rem] sm:h-[7rem] px-1 mt-[4%] max-w-sm">
            <b>
              <h2 className="text-title font-title max-w-[270px] text-base ">
                {service}
              </h2>
            </b>
            <p className="text-sans font-subtitle font-medium py-[3%]">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    );
};

export default JournalCard;
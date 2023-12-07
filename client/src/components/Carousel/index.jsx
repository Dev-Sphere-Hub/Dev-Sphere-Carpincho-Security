// Carousel.js
import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Carousel = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [intervalTime, setIntervalTime] = useState(5000);
  const [isBackArrowVisible, setIsBackArrowVisible] = useState(false);

  const nextCategory = () => {
    setCurrentCategory((currentCategory + 1) % newDetails.length);
    setIntervalTime(60000);
    setIsBackArrowVisible(true);
  };

  const prevCategory = () => {
    setCurrentCategory((currentCategory + newDetails.length - 1) % newDetails.length);
    setIntervalTime(60000);
    setIsBackArrowVisible(false);
  };

  const newDetails = [
    {
      img: "https://source.unsplash.com/featured/?report",
      new: "Reporte",
      newDescripcion: "Se rompió un vidrio de la entrada de un hogar",
    }, {
      img: "https://source.unsplash.com/featured/?emergency",
      new: "Emergencia",
      newDescripcion: "Se produjo un incendio en el contenedor de basura.",
    },
    {
      img: "https://source.unsplash.com/featured/?people",
      new: "Personas No Autorizadas",
      newDescripcion: "Se detectaron personas no autorizadas en el área común",
    },
    {
      img: "https://source.unsplash.com/featured/?event",
      new: "Evento Destacado",
      newDescripcion: "Mañana 18:00hs, habrá reunión de vecinos en el salón comunitario.",
    },
  
    {
      img: "https://images.unsplash.com/photo-1601914697928-0b536e76d048?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      new: "Emergencia",
      newDescripcion: "Evacuación inmediata debido a una fuga de gas peligrosa.",
    },
    {
      img: "https://source.unsplash.com/featured/?warning",
      new: "Aviso",
      newDescripcion: "Habrá un mantenimiento programado en el sistema de seguridad del country",
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((currentCategory + 1) % newDetails.length);
      setIntervalTime(3000);
      setIsBackArrowVisible(false);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [currentCategory, newDetails.length, intervalTime]);

  const iconSize = 30;

  return (
    <div className="flex py-4 lg:w-full lg:h-full">
      <div className="flex lg:space-x-6 w-full h-full">
        <div className="self-center">
          <button
            onClick={prevCategory}
            className={`text-2xl ${isBackArrowVisible ? 'opacity-50 hover:opacity-100' : 'opacity-0'} transition-opacity mr-10`}
          >
            <MdKeyboardDoubleArrowLeft size={iconSize} />
          </button>
        </div>
        {newDetails.slice(currentCategory, currentCategory + 2).map((newsItem, index) => (
          <NewsCard
            key={newsItem.new}
            news={{
              dateTime: new Date().toISOString(),
              category: newsItem.new,
              detail: newsItem.newDescripcion,
              image: newsItem.img,
            }}
            isZoomed={index === 1} 
          />
        ))}
        <div className="self-center">
          <button
            onClick={nextCategory}
            className="flex text-2xl opacity-50 hover:opacity-100 ml-10"
          >
            <MdKeyboardDoubleArrowRight size={iconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

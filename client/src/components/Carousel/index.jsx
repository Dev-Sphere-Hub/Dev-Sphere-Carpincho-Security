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
    setCurrentCategory(
      (currentCategory + newDetails.length - 1) % newDetails.length
    );
    setIntervalTime(60000);
    setIsBackArrowVisible(false);
  };

  const newDetails = [
    {
      img: "https://i.postimg.cc/Gm5q470B/Image-generated-168170914-2.webp",
      new: "Reporte",
      newDescripcion: "Se rompió un vidrio de la entrada de un hogar (Hogar 515)",
    },
    {
      img: "https://i.postimg.cc/N0N9sVZV/Image-generated-168170922-3.webp",
      new: "Personas No Autorizadas",
      newDescripcion: "Se detectaron personas no autorizadas en el área común a las 14:30:45 del 6/12/2023.",
    },
    {
      img: "https://i.postimg.cc/2j0vjqNy/Image-generated-1681709552.webp",
      new: "Evento Destacado",
      newDescripcion: "Mañana a las 18:00 horas, habrá una reunión de vecinos en el salón comunitario.",
    },
    {
      img: "https://i.postimg.cc/dV0DKkT9/Image-generated-168196449-3.webp",
      new: "Emergencia",
      newDescripcion: "Se produjo un incendio en el contenedor de basura. Alejarse del área afectada.",
    },
    {
      img: "https://i.postimg.cc/g07QPccT/Image-generated-168170731-3.webp",
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

  const iconSize = 30; // Puedes ajustar el tamaño aquí

  return (
    <div className="flex py-4 lg:w-full lg:h-full">
      <div className="flex lg:space-x-2 w-full h-full">
        <div className="self-center">
          <button
            onClick={prevCategory}
            className={`text-2xl ${isBackArrowVisible ? 'opacity-50 hover:opacity-100' : 'opacity-0'} transition-opacity mr-10`}
          >
            <MdKeyboardDoubleArrowLeft size={iconSize} />
          </button>
        </div>
        {newDetails
          .slice(currentCategory, currentCategory + 2)
          .map((newsItem) => (
            <NewsCard
              key={newsItem.new}
              news={{
                dateTime: new Date().toISOString(),
                category: newsItem.new,
                detail: newsItem.newDescripcion,
                image: newsItem.img,
              }}
            />
          ))}
        <div className="self-center">
          <button
            onClick={nextCategory}
            className="flex text-2xl opacity-50 hover:opacity-100  ml-10"
          >
            <MdKeyboardDoubleArrowRight size={iconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

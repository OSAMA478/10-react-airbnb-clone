import React from "react";
import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer item-center rounded-xl hover:bg-gray-100 hover:scale-105">
      {/* left */}
      <div className="relative w-16 h-16 ">
        <Image className="object-contain rounded-lg" src={img} fill />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

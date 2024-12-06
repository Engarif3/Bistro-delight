// const FoodItem = ({ item }) => {
//   const { name, image, price, description } = item;
//   const backendUrl = "http://localhost:8000";
//   const getImageSrc = (imagePath) => {
//     if (!imagePath) {
//       return "/placeholder.jpg"; // Default placeholder image
//     }
//     if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
//       return imagePath;
//     }
//     return `${backendUrl}${imagePath}`;
//   };
//   return (
//     <div className=" flex space-x-2 justify-center items-center border border-slate-500 p-4 rounded-lg hover:bg-red-600">
//       <img
//         style={{ borderRadius: "0 200px 200px 200px" }}
//         className="w-[300px] h-[260px]"
//         src={getImageSrc(image)}
//         alt={`${name} image`}
//       />
//       <div>
//         <h3 className="uppercase">{name}--------</h3>
//         <p className="truncate">{description}</p>
//       </div>
//       <p className="text-yellow-400">${price}</p>
//     </div>
//   );
// };

// export default FoodItem;

import React, { useState } from "react";

const FoodItem = ({ item }) => {
  const { name, image, price, description } = item;
  const [isExpanded, setIsExpanded] = useState(false);
  const backendUrl = "http://localhost:8000";

  const getImageSrc = (imagePath) => {
    if (!imagePath) {
      return "/placeholder.jpg"; // Default placeholder image
    }
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    return `${backendUrl}${imagePath}`;
  };

  // Limit description to 30 words
  const words = description.split(" ");
  const limitedText = words.slice(0, 20).join(" ");

  return (
    <div className="flex p-1 justify-center items-center border border-slate-500  rounded-md hover:bg-red-600">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[300px] h-[260px] border-2 border-red-600"
        src={getImageSrc(image)}
        alt={`${name} image`}
      />
      <div className="w-6/12">
        <h3 className="uppercase mb-8">
          {name}------<span className="text-yellow-400 ">${price}</span>
        </h3>
        <p className="w-10/12 ml-4">
          {isExpanded ? description : `${limitedText}...`}
          {description.split(" ").length > 20 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-blue-500 hover:underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;

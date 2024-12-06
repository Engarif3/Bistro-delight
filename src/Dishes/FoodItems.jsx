// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import MenuItem from "../../Shared/MenuItem/MenuItem";
// import useMenu from "../../../hooks/useMenu";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import SectionTitle from "../components/SectionTitle";
import api from "../axios";

const FoodItems = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [menu] = useMenu();
  // const popular = menu.filter((item) => item.category === "popular");

  const getImageSrc = (imagePath) => {
    if (!imagePath) {
      return "/placeholder.jpg"; // Default placeholder image
    }
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    return `${backendUrl}${imagePath}`;
  };

  useEffect(() => {
    api
      .get("/dishes")
      .then((response) => {
        setDishes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-500 animate-pulse">
          Loading dishes...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-10/12 ">
          <div className="grid md:grid-cols-2 gap-8 mx-16">
            {dishes.map((item) => (
              <FoodItem key={item.id} item={item}></FoodItem>
            ))}
          </div>
          <button className="btn btn-outline border-0 border-b-4 mt-6">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodItems;

import { useEffect, useState } from "react";
import api from "../axios";

const List_of_Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/dishes")
      .then((response) => setDishes(response.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="font-bold underline bg-red-500">Dishss List</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            {dish.name}-{dish.price}
            <div>
              <img src={dish.image} alt="dish_image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List_of_Dishes;

import { Helmet } from "react-helmet-async";
// import Category from "../Category/Category";
// import Featured from "../Featured/Featured";
// import PopularMenu from "../PopularMenu/PopularMenu";
// import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner";
import Category from "./Category";
// import List_of_Dishes from "../../Dishes/List_of_Dishes";
import FoodItems from "../../Dishes/FoodItems";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      {/* <List_of_Dishes></List_of_Dishes> */}
      <FoodItems></FoodItems>
      {/* <PopularMenu></PopularMenu> */}
      {/* <Featured></Featured> */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

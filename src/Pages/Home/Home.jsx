import React,{useState} from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

const Home = () => {

const [catagory, setCatagory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu catagory={catagory} setCatagory={setCatagory}/>
      <FoodDisplay catagory={catagory}/>
      <AppDownload/>
    </div>
  );
};

export default Home;

// import Slider from '../SliderFIle/Slider';

import { useLoaderData } from "react-router-dom";
import HomeSlider from "./SliderFile/HomeSlider";



const Home = () => {
    const datas = useLoaderData();

    return (
        <div className="-mt-16">
            <HomeSlider datas={datas} ></HomeSlider>          
        </div>
      );
};

export default Home;
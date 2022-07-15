import React, { Component } from "react";

//import Swiper from "react-id-swiper";

import SwiperCore, { Autoplay } from "swiper";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import MySlide from "./MySlide";

SwiperCore.use([Autoplay]);

class Slides extends Component {
  render() {
  
   

   
    return (
      <div className="slides_wrapper">
        <div className="slider_home">
          
            
           <MySlide />
            
          
        </div>
      </div>
    );
  }
}

export default Slides;

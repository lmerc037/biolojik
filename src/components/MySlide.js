import React from "react";
import { Link } from "react-router-dom"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const MySlide = () => {
    const { t } = useTranslation();
    const properties = {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        effect: "slide",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".st-swiper-button-next",
          prevEl: ".st-swiper-button-prev",
        },
        renderPrevButton: () => (
          <div className="st-swiper-button-prev st-swiper-button-nav d-none d-xl-block">
            <i className="icon-glyph-205" />
          </div>
        ),
        renderNextButton: () => (
          <div className="st-swiper-button-next st-swiper-button-nav d-none d-xl-block">
            <i className="icon-glyph-204" />
          </div>
        ),
        autoplay: {
          delay: 5000,
        },
      };

  return (
    <Swiper {...properties}>
    <SwiperSlide>
    <div
      className="single_slider slide_bg_1"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg)` }}
     
    >
      <div className="slider_item_tb">
        <div className="slider_item_tbcell">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
             
                <h2> {t("SlideTitle.1")}</h2>
              
                <div className="slider_btn animated fadeInDown">
                  <Link
                    to="shop"
                    className="slider_btn_one more-link "
                  >
                    {t("SlideTitle.3")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

<SwiperSlide>
<div
  className="single_slider slide_bg_2"
  style={{ backgroundImage: `url(https://images.pexels.com/photos/5529587/pexels-photo-5529587.jpeg)` }}
 
>
  <div className="slider_item_tb">
    <div className="slider_item_tbcell">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
         
            <h2>{t("SlideTitle.2")}</h2>
          
            <div className="slider_btn animated fadeInDown">
              <Link
                to="shop"
                className="slider_btn_one more-link "
              >
                {t("SlideTitle.3")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</SwiperSlide>

</Swiper>


    
  );
};
 

export default MySlide;

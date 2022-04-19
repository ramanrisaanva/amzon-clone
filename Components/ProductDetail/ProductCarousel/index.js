import React, { Component } from "react";
import './style.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs="false" showArrows={false}  className="product_carousel_wrap">
          <div>
            <img src="/11.png" alt="image1" />
          </div>
          <div>
            <img src="/12.png" alt="image1" />
          </div>
          <div>
            <img src="/13.png" alt="image1" />
          </div>
        </Carousel>
      </div>
    );
  }
}

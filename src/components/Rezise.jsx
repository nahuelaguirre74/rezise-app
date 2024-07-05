import React, { useState } from "react";
import Slider from "react-slick";


function Resizable() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [];
  return (
    
    <div className="slider-container">
      <h2> Resizable Collapsible </h2>
      <button className="button" onClick={() => setWidth(width + 50)}>
        {" "}
        increase{" "}
      </button>
      <button className="button" onClick={() => setWidth(width - 50)}>
        {" "}
        decrease{" "}
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        {" "}
        toggle{" "}
      </button>
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
          <div className="card">
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/isolated-leaf_EP1B8CMRC6.jpg" alt=""/>
            <div className="card-body">
              <h3>Slick</h3>
              <p>Estoy usando React</p>
            </div>
          </div>
          <div className="card">
           <img src="https://cdn.stocksnap.io/img-thumbs/960w/white-ibis_Q6A4HCTY9W.jpg" alt=""/>
           <div className="card-body">
           <h3>Slick</h3>
           <p>Estoy usando React</p>
           </div>
          </div>
          <div className="card">
           <img src="https://cdn.stocksnap.io/img-thumbs/960w/astro-star%20trails_8UPLJEGABH.jpg" alt=""/>
           <div className="card-body">
           <h3>Slick</h3>
           <p>Estoy usando React</p>
           </div>
          </div>
          <div className="card">
           <img src="https://cdn.stocksnap.io/img-thumbs/960w/autumn-forest_KCZNDRYSHE.jpg" alt=""/>
           <div className="card-body">
           <h3>Slick</h3>
           <p>Estoy usando React</p>
           </div>
          </div>
          <div className="card">
           <img src="https://cdn.stocksnap.io/img-thumbs/960w/forest-flowers_TQ6J8JFQXS.jpg" alt=""/>
           <div className="card-body">
           <h3>Slick</h3>
           <p>Estoy usando React</p>
           </div>
          </div>
          <div className="card">
           <img src="https://cdn.stocksnap.io/img-thumbs/960w/umbrella-rain_KIJJLUCS7S.jpg" alt=""/>
           <div className="card-body">
           <h3>Slick</h3>
           <p>Estoy usando React</p>
           </div>
          </div>
        </Slider>
      </div>

      <div className="Resizable">
            <Slider {...settings}>
                {images.map((image,index)=>(
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  );
}

export default Resizable;

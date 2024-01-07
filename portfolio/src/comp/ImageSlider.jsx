import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ImageSlider.css'

const ImageSlider = ({ images,images2,images3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };

  return (<>
    <Slider className='lap'{...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img  style={{width:'100%',height:"625px"}} src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>

        <Slider className='ipad'{...settings}>
        {images2.map((image, index) => (
          <div key={index}>
            <img  style={{width:'100%',height:"540px"}} src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <Slider className='phone'{...settings}>
        {images3.map((image, index) => (
          <div key={index}>
            <img  style={{width:'100%',height:"540px"}} src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
        </>
  );
};

export default ImageSlider;
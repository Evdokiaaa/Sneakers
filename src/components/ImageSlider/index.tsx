import React from "react";
import "./styles.scss";
const ImageSlider = () => {
  const images = [
    {
      id: 1,
      url: "src/assets/images/slider-image-1.jpg",
    },
    {
      id: 2,
      url: "src/assets/images/slider-image-2.jpg",
    },
    {
      id: 3,
      url: "src/assets/images/slider-image-3.jpg",
    },
    {
      id: 4,
      url: "src/assets/images/slider-image-4.jpg",
    },
  ];
  const [currentImage, setCurrentImage] = React.useState(0);
  const mainImage = images[currentImage].url;
  const handleNextClick = () => {
    setCurrentImage((item) => (item === images.length - 1 ? 0 : item + 1));
  };
  const handleBackClick = () => {
    setCurrentImage((item) => (item === 0 ? images.length - 1 : item - 1));
  };
  console.log(currentImage);
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__main">
          <img className="slider__main-image" src={mainImage} alt="image" />
          <div className="arrows">
            <span
              className="arrow left-arrow"
              onClick={() => handleBackClick()}
            ></span>
            <span
              className="arrow right-arrow"
              onClick={() => handleNextClick()}
            ></span>
          </div>
        </div>

        <div className="slider__support-container">
          {images.map((image) => (
            <div
              className={
                currentImage + 1 === image.id
                  ? "slider__support-image-block slider__active"
                  : "slider__support-image-block"
              }
              key={image.id}
              onClick={() => setCurrentImage(image.id - 1)}
            >
              <img
                className="slider__support-image "
                src={image.url}
                alt="support"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

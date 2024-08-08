import React, { useState } from "react";
import pro1 from "./images/image-product-1.jpg";
import pro2 from "./images/image-product-2.jpg";
import pro3 from "./images/image-product-3.jpg";
import pro4 from "./images/image-product-4.jpg";
import pro1a from "./images/image-product-1-thumbnail.jpg";
import pro2a from "./images/image-product-2-thumbnail.jpg";
import pro3a from "./images/image-product-3-thumbnail.jpg";
import pro4a from "./images/image-product-4-thumbnail.jpg";
import next from "./images/icon-next.svg";
import prev from "./images/icon-previous.svg";

const Display = () => {
  const [current, setCurrent] = useState(pro1);

  const imageList = [pro1, pro2, pro3, pro4];

  const handleNext = () => {
    const currentIndex = imageList.findIndex((i) => i === current);
    if (currentIndex === imageList.length - 1) {
      setCurrent(imageList[0]);
    } else {
      setCurrent(imageList[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = imageList.findIndex((i) => i === current);
    if (currentIndex === 0) {
      setCurrent(imageList[imageList.length - 1]);
    } else {
      setCurrent(imageList[currentIndex - 1]);
    }
  };

  return (
    <div className="photo-side">
      <div>
        <img src={prev} className="prev" alt="prev" onClick={handlePrev} />
        <img src={current} alt="main-product" className="main-pro" />
        <img src={next} className="next" alt="next" onClick={handleNext} />
      </div>
      <div>
        <img src={pro1a} onClick={() => setCurrent(pro1)} alt="product" />
        <img src={pro2a} onClick={() => setCurrent(pro2)} alt="product" />
        <img src={pro3a} onClick={() => setCurrent(pro3)} alt="product" />
        <img src={pro4a} onClick={() => setCurrent(pro4)} alt="product" />
      </div>
    </div>
  );
};

export default Display;

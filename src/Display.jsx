import React, { useState } from "react";
import next from "./images/icon-next.svg";
import prev from "./images/icon-previous.svg";

const Display = ({ shoe }) => {
  console.log(shoe);
  const [current, setCurrent] = useState(shoe[0]);

  const handleNext = () => {
    const currentIndex = shoe.findIndex((i) => i === current);
    console.log(currentIndex);
    if (currentIndex === shoe.length - 1) {
      setCurrent(shoe[0]);
    } else {
      setCurrent(shoe[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = shoe.findIndex((i) => i === current);
    if (currentIndex === 0) {
      setCurrent(shoe[shoe.length - 1]);
    } else {
      setCurrent(shoe[currentIndex - 1]);
    }
  };

  return (
    <div className="photo-side">
      <div>
        <img src={prev} className="prev" alt="prev" onClick={handlePrev} />
        <img src={current.image} alt="main-product" className="main-pro" />
        <img src={next} className="next" alt="next" onClick={handleNext} />
      </div>
      <div>
        {shoe.length > 1 &&
          shoe
            .slice(1, shoe.length + 1)
            .map((shoe, index) => (
              <img
                key={index}
                src={shoe.image}
                onClick={() => setCurrent(shoe)}
                alt="product"
              />
            ))}

        {/* <img src={pro2a} onClick={() => setCurrent(pro2)} alt="product" />
        <img src={pro3a} onClick={() => setCurrent(pro3)} alt="product" />
        <img src={pro4a} onClick={() => setCurrent(pro4)} alt="product" /> */}
      </div>
    </div>
  );
};

export default Display;

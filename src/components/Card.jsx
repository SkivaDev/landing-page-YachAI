import React from "react";

function Card({ imageUrl, title, description, index, buttonText, width, height, cssSlide }) {
  return (
    <div className="max-w-[290px]">
      <div className="flex gap-[7px] items-center">
        <div className={`p-[15px] rounded-full bg-very_light_purple`}>
          <img src={imageUrl} alt="" width={width} height={height} className={`w-[${width}px] h-[${height}px]`} />
        </div>
        <h3>{title}</h3>
      </div>
      <p className="mt-[17px] leading-paragraph_feature">{description}</p>
      <button className="text-[14px] mt-[37px] text-dark_purple">{buttonText} <span>→</span></button>
    </div>
  );
}

export default Card;

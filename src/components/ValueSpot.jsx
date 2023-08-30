import React from "react";

function ValueSpot({
  title,
  subTitle,
  description,
  subBenefits,
  imageUrl,
  buttonText,
  width,
  height,
  index,
}) {

  // const subBenefitsValues = [...subBenefits]
  // console.log(subBenefitsValues)
  //console.log(subBenefits)

  return (
    <div className={`flex gap-[50px] justify-between w-full ${(index % 2 === 0) ? '' : 'flex-row-reverse'}`}>
      <img src={imageUrl} alt="" width={width} height={height} className={`w-[${width}px] h-[${height}px]`}/>
      <div className="">
        <h4 className="text-dark_purple">{subTitle}</h4>
        <h3 className="text-[33px]">{title}</h3>
        <p className="text-[18px]">{description}</p>
        <div className="mt-[39px] flex flex-col gap-[30px]">
          {subBenefits.map((subBenefit, i) => (
            <div key={i} className={`flex items-start gap-[12px] `}>
              <img src={subBenefit.iconUrl} alt="" className="mt-[3px]"/>
              <div>
                <h4>{subBenefit.title}</h4>
                <p>{subBenefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-[35px] py-[10px] px-[21px] bg-smooth_purple rounded-lg text-white">{buttonText}</button>
      </div>
    </div>
  );
}

export default ValueSpot;

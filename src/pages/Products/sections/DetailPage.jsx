import { Rating } from "@mui/material";
import React, { useContext } from "react";
import arrowback from "../../../assets/arrowback.png";
import cross from "../../../assets/cross.png";
import { NavLink } from "react-router-dom";
import { ContextData } from "../../../Context/Context";

function DetailPage() {
  const { productdetail } = useContext(ContextData);

  const {
    title,
    description,
    category,
    price,
    tags,
    brand,
    dimensions,
    reviews,
    images,
    thumbnail,
  } = productdetail;

  const dimensionsArray = Object.values(dimensions);

  return (
    <>
      <div className="h-full bg-custom-gradient w-screen flex flex-col justify-between h-full py-4 pb-6 px-[10%]">
        <div className="flex flex-row gap-4 my-4">
          <NavLink to="/products">
            <img src={arrowback} alt="arrowback" width={25} height={25} />
          </NavLink>
          <div>Back to Products</div>
        </div>
        <div className="flex flex-row justify-around gap-8 max-md:flex-col">
          <div className="flex flex-col gap-4">
            <img
              src={thumbnail}
              alt={title}
              width={1000}
              height={1500}
              className="p-4 rounded-3xl bg-[#ffffff]"
            />
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      src={image}
                      alt={title}
                      width={100}
                      height={100}
                      className="rounded-lg shadow-custom-lg bg-[#ffffff]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[20px] font-normal">
              {description}{" "}
              <span className="text-[16px] font-bold">( {category} )</span>
            </div>
            <div>$ {price}</div>
            <div className="flex flex-row gap-2">
              {tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="border border-1 py-2 px-4 border-[#a78770] rounded-2xl bg-[#a78770] text-[#ffffff] font-medium"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
            <div>
              Brand: <span className="font-bold">{brand}</span>
            </div>
            <div className="flex flex-row gap-2">
              <div>Dimensions:</div>
              {dimensionsArray.map((dim, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-2 font-bold"
                  >
                    <div>{dim}</div>
                    <div>
                      {index < dimensionsArray.length - 1 && (
                        <img src={cross} alt="cross" width={15} height={15} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-4 text-[#000000] max-md:grid-cols-1">
              {reviews.map((review, index) => {
                const { reviewerName, rating, comment } = review;
                return (
                  <div
                    key={index}
                    className="border border-[#000000] rounded-xl p-4 flrx flex-col justify-start bg-[#d3d3d3]"
                  >
                    <h1>{reviewerName}</h1>
                    <div>
                      <Rating
                        name="read-only"
                        value={rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </div>
                    <div>{comment}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;

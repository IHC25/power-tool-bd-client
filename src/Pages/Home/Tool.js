import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, description, minOrder, availableQuantity, price } =
    tool;
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <figure className="px-10 pt-10 border-4">
        <img src={img} alt="tools" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Minimum Order: {minOrder}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => {
              navigate(`/tools/${_id}`);
            }}
            className="btn btn-neutral"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;

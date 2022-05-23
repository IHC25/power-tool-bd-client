import React from "react";

const Tool = ({ tool }) => {
  const { name, img, description, minOrder, availableQuantity, price } = tool;
  return (
    <div class="card w-96 bg-base-100 shadow-xl p-5">
      <figure class="px-10 pt-10 border-4">
        <img src={img} alt="tools" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Minimum Order: {minOrder}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: ${price}</p>
        <div class="card-actions">
          <button class="btn btn-neutral">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;

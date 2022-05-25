import React from "react";

const ToolDetails = ({ tool }) => {
  const { name, description, img, price, minOrder, availableQuantity } = tool;
  return (
    <section className="py-14">
      <h2 className="text-4xl text-neutral font-bold uppercase">
        Tool Details
      </h2>
      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto w-2/3">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-left">{description}</p>
          <h5 className="text-xl text-left font-bold">
            Minimum Order Quantity: {minOrder}
          </h5>
          <h5 className="text-xl text-left font-bold">
            Available Quantity: {availableQuantity}
          </h5>
          <h5 className="text-xl text-left font-bold">Price: ${price}</h5>
        </div>
      </div>
    </section>
  );
};

export default ToolDetails;

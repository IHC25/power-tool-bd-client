import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: e.target.name.value,
      img: e.target.img.value,
      description: e.target.description.value,
      minOrder: e.target.minOrder.value,
      availableQuantity: e.target.availableQuantity.value,
      price: e.target.price.value,
    };
    fetch("http://localhost:5000/tools", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((product) => {
        toast.success("New Product Added!");
        e.target.reset();
      });
  };

  return (
    <div>
      <h2 className="text-4xl py-4 text-neutral font-bold uppercase">
        Add A Product
      </h2>
      <div className="w-full bg-base-200">
        <div className="mx-auto w-1/2 py-14">
          <div className="card max-w-lg shadow-2xl bg-base-100">
            <div className="card-body w-full">
              <form onSubmit={handleAddProduct} className="w-full" action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Type Product Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    name="img"
                    type="text"
                    placeholder="Type Product Image URL"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Add Product Description"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Minimum Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="minOrder"
                    placeholder="Add Minimum Order Quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="availableQuantity"
                    placeholder="Add Available Quantity"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Add Product Price"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-neutral">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

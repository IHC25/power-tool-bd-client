import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const OrderDetails = ({ tool }) => {
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);

  const handleMyQuantity = (e) => {
    const myQuantity = e.target.value;
    if (myQuantity > tool.availableQuantity) {
      setError(
        `You cannot purchase more than ${tool.availableQuantity} products`
      );
      setDisable(true);
    } else if (myQuantity < tool.minOrder) {
      setError(`You have to purchase at least ${tool.minOrder} products`);
      setDisable(true);
    } else {
      setError("");
      setDisable(false);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userName = e.target.name.value;
    const product = tool.name;
    const price = tool.price;
    const orderQuantity = e.target.quantity.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const order = {
      email: userEmail,
      name: userName,
      product: product,
      quantity: orderQuantity,
      address: address,
      phone: phone,
      price: price,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("You have Successfully placed an Order");
      })
      .catch((error) => {
        toast.error("Error Occurred!");
        console.error("Error:", error);
      });
  };
  return (
    <section className="py-14">
      <h2 className="text-4xl text-neutral font-bold uppercase">
        Order Details
      </h2>
      <form onSubmit={handlePlaceOrder} className="mx-auto w-1/2">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Customer Name</span>
          </label>
          <label class="input-group w-full">
            <span className="w-1/4">Name</span>
            <input
              name="name"
              type="text"
              value={user.displayName}
              class="input input-bordered w-1/2"
              disabled
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Customer Email</span>
          </label>
          <label class="input-group w-full">
            <span className="w-1/4">Email</span>
            <input
              name="email"
              type="email"
              value={user.email}
              class="input input-bordered w-1/2"
              disabled
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Customer Address</span>
          </label>
          <label class="input-group w-full">
            <span className="w-1/4">Address</span>
            <input
              name="address"
              type="text"
              placeholder="Enter Your Address"
              class="input input-bordered w-1/2"
              required
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Customer Phone Number</span>
          </label>
          <label class="input-group w-full">
            <span className="w-1/4">Phone</span>
            <input
              name="phone"
              type="number"
              placeholder="Enter Your Phone Number"
              class="input input-bordered w-1/2"
              required
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Order Quantity</span>
          </label>
          <label class="input-group w-full">
            <span className="w-1/4">Quantity</span>
            <input
              onBlur={handleMyQuantity}
              name="quantity"
              type="number"
              defaultValue={tool.minOrder}
              class="input input-bordered w-1/2"
              required
            />
          </label>
        </div>

        <div className="py-3">
          <p className="text-red-500 text-xl">{error}</p>
        </div>

        <input
          className="btn btn-neutral py-4 my-5"
          type="submit"
          value="Place Order"
          disabled={disable === true}
        />
      </form>
    </section>
  );
};

export default OrderDetails;

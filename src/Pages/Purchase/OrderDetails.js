import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderDetails = () => {
  const [user] = useAuthState(auth);
  return (
    <section className="py-14">
      <h2 className="text-4xl text-neutral font-bold uppercase">
        Order Details
      </h2>
      <form className="mx-auto w-1/2">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Customer Name</span>
          </label>
          <label class="input-group w-full">
            <span className="w-1/4">Name</span>
            <input
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
              type="text"
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
              type="number"
              placeholder="Enter Your Phone Number"
              class="input input-bordered w-1/2"
              required
            />
          </label>
        </div>
        <input
          className="btn btn-neutral py-4 my-5"
          type="submit"
          value="Place Order"
        />
      </form>
    </section>
  );
};

export default OrderDetails;

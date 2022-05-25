import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddAReview = () => {
  const [user] = useAuthState(auth);
  const handleAddReview = (e) => {
    e.preventDefault();
    const myReview = {
      name: user.displayName,
      img: user.photoURL,
      rating: e.target.rating.value,
      review: e.target.review.value,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      body: JSON.stringify(myReview),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((review) => {
        toast.success("Your Review Added!");
        e.target.reset();
      });
  };
  return (
    <div>
      <h2 className="text-4xl py-5 text-neutral">Add A Review</h2>
      <div class="card w-96  bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <form onSubmit={handleAddReview}>
            <p className="text-left pb-3">Rating</p>
            <input
              type="number"
              name="rating"
              placeholder="Add Rating"
              class="input input-bordered input-sm w-full max-w-xs"
              required
            />
            <p className="text-left pb-3">Review</p>
            <input
              type="text"
              name="review"
              placeholder="Add Review"
              class="input input-bordered input-lg w-full max-w-xs"
              required
            />

            <input
              className="btn btn-neutral mt-3"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;

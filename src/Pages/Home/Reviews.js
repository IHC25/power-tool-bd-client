import React from "react";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: "https://i.insider.com/5899ffcf6e09a897008b5c04?width=1000&format=jpeg&auto=webp",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
    },
  ];
  return (
    <div className="py-14">
      <div className="py-5">
        <h2 className="text-4xl text-neutral font-bold py-5 uppercase">
          Customer Reviews
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

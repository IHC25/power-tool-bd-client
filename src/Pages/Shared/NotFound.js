import React from "react";
import notFound from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-neutral py-5">Error</h1>
          <img src={notFound} alt="not found" />
          <p className="py-6">The Page You Are Looking Doesn't Exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

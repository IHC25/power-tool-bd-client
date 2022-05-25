import React from "react";
import notFound from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-neutral py-5">Error</h1>
          <img src={notFound} alt="not found" />
          <p class="py-6">The Page You Are Looking Doesn't Exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

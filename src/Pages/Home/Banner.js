import React from "react";
import banner from "../../images/banner.webp";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen max-w-"
      style={{ background: `url(${banner})` }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Power Tool BD</h1>
          <p class="mb-5">We Provide The Best Tools in Bangladesh.</p>
          <button class="btn btn-ghost">Find Out More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
<h2>My Banner</h2>;

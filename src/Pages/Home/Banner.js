import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../images/banner.webp";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen w-full"
      style={{ background: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Power Tool BD</h1>
          <p className="mb-5">We Provide The Best Tools in Bangladesh.</p>
          <button
            onClick={() => {
              navigate("/tools");
            }}
            className="btn btn-ghost"
          >
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

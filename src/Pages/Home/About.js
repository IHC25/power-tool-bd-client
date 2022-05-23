import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://cdn.pixabay.com/photo/2019/01/29/16/28/electricity-3962788_1280.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 class="text-5xl font-bold uppercase">Who We Are</h1>
          <p class="py-6">
            The direct, practical and comprehensive service for you and your
            tool. Along with excellent tools, we also offer outstanding-quality
            services.
          </p>
          <p className="pb-3">
            Enjoy comprehensive services with our warranty all-inclusive, for
            example 3-Year Comprehensive Warranty Coverage - including wear and
            tear and free repair shipping both ways.
          </p>
          <button
            onClick={() => {
              navigate("/tools");
            }}
            class="btn btn-neutral"
          >
            See Our Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const BusinessSummary = () => {
  return (
    <div className="py-5 bg-white">
      <h2 className="text-5xl font-bold py-4 text-neutral">
        Most Trustworthy Manufacturer in Bangladesh
      </h2>
      <h3 className="text-3xl">Users Satisfaction is Our Top Priority</h3>
      <div class="stats shadow">
        <div class="stat place-items-center">
          <div class="stat-title">
            Served Customer
            <img
              className="mx-auto"
              src="https://img.icons8.com/ios-glyphs/90/000000/group.png"
              alt=""
            />
          </div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">From January 2021 to June 2022</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">
            Annual Revenue
            <img
              className="mx-auto"
              src="https://img.icons8.com/ios/90/000000/sales-performance.png"
              alt=""
            />
          </div>
          <div class="stat-value text-primary">120M+</div>
          <div class="stat-desc">20% increase</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">
            Tools
            <img
              className="mx-auto"
              src="https://img.icons8.com/ios/90/000000/hammer-and-anvil.png"
              alt=""
            />
          </div>
          <div class="stat-value">50+</div>
          <div class="stat-desc">2% increase from 2021</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;

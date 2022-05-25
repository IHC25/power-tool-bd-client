import React from "react";

const MyPortfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">
            Hello there, I'm{" "}
            <span className="text-blue-400">Imran Hossain Chowdhury</span>
          </h1>
          <div>
            <h4 className="text-2xl text-neutral font-bold py-6">
              Contact Info
            </h4>
            <p>Email: imranhchy@gmail.com</p>
            <h4 className="text-2xl text-neutral font-bold py-6">
              Educational Background
            </h4>
            <p className="pb-2">
              BAF Shaheen College, Shamshernagar <br />
              SSC,2016
            </p>
            <p className="pb-2">
              Kulaura Govt. College
              <br />
              HSC,2018
            </p>
            <p className="pb-2">
              Metropolitan University,Sylhet
              <br />
              BSc. in EEE, Expected to graduate in December 2022
            </p>
            <h4 className="text-2xl text-neutral font-bold py-6">Skills</h4>
            <p>
              HTML, CSS, BOOTSTRAP, TAILWIND, JS, REACT, FIREBASE, GITHUB,
              MONGODB, NODE.JS, EXPRESS.JS
            </p>
            <h4 className="text-2xl text-neutral font-bold py-6">Projects</h4>
            <h5 className="text-xl text-neutral font-bold pb-3">Tooth Care</h5>
            <p className="pb-3">
              Project Link: https://tooth-care-f261d.web.app/home
            </p>
            <h5 className="text-xl text-neutral font-bold pb-3">Fruit Feast</h5>
            <p className="pb-3">
              Project Link: https://fruit-feast-77dda.web.app/
            </p>
            <h5 className="text-xl text-neutral font-bold pb-3">
              Electronics Shop BD
            </h5>
            <p className="pb-3">
              Project Link: https://ihc-electronics-shop-bd.netlify.app/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

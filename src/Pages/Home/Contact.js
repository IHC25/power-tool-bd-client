import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-100 px-10 py-14 ">
      <div className="text-center pb-14 text-neutral">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-primary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md border-neutral"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md border-neutral"
        />
        <textarea
          className="textarea w-full max-w-md border-neutral"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <button className="btn btn-neutral text-white">Submit</button>
      </div>
    </div>
  );
};

export default Contact;

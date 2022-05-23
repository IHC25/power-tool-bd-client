import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="py-14">
      <h2 className="text-4xl font-bold text-neutral uppercase py-5">
        Our Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {tools.map((tool) => (
          <Tool tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;

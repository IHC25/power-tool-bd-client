import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToolDetails from "./ToolDetails";

const Purchase = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/tools/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId, tool]);
  return (
    <div>
      <ToolDetails tool={tool}></ToolDetails>
    </div>
  );
};

export default Purchase;

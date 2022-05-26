import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import ToolDetails from "./ToolDetails";

const Purchase = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState([]);
  useEffect(() => {
    const url = `https://salty-eyrie-77802.herokuapp.com/tools/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId, tool]);
  return (
    <div>
      <ToolDetails tool={tool}></ToolDetails>
      <OrderDetails tool={tool}></OrderDetails>
    </div>
  );
};

export default Purchase;

import React from "react";

const MyOrderRow = ({ order, setCancelingOrder, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.product}</td>
      <td>{order.quantity}</td>
      <td>
        <button className="btn btn-xs btn-success text-white">Pay</button>
      </td>
      <td>
        <label
          onClick={() => setCancelingOrder(order)}
          for="cancel-confirm-modal"
          className="btn btn-xs btn-error text-white"
        >
          X
        </label>
      </td>
    </tr>
  );
};

export default MyOrderRow;

import React from "react";
import { useNavigate } from "react-router-dom";

const MyOrderRow = ({ order, setCancelingOrder, index }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.product}</td>
      <td>{order.quantity}</td>
      <td>
        {!order.paid ? (
          <button
            onClick={() => navigate(`/dashboard/payment/${order._id}`)}
            className="btn btn-xs btn-success text-white"
          >
            Pay
          </button>
        ) : (
          <>
            <p className="text-success">paid</p>
            <p>
              Transaction:{" "}
              <span className="text-red-400">{order.transactionId}</span>
            </p>
          </>
        )}
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

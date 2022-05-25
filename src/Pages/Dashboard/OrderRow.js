import React, { useEffect } from "react";
import { toast } from "react-toastify";

const OrderRow = ({ order, index }) => {
  const { _id, name, email, product, paid, status } = order;
  useEffect(() => {}, [order]);
  const handleShipping = () => {
    fetch(`http://localhost:5000/order/shipped/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Ship Product");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully Shipped Product`);
        }
      });
  };
  const handleOrderDelete = () => {
    if (window.confirm("Delete This Order?")) {
      fetch(`http://localhost:5000/order/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log(data);
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{product}</td>
      <td>
        {paid ? (
          !status ? (
            <p className="text-yellow-400">Pending</p>
          ) : (
            <p className="text-success">Shipped</p>
          )
        ) : (
          <p className="text-error">Not Paid</p>
        )}
      </td>
      <td>
        <button
          onClick={handleShipping}
          className="btn btn-xs btn-success text-white mx-2"
          disabled={status === "approved" || !paid}
        >
          Ship
        </button>
        <button
          onClick={handleOrderDelete}
          className="btn btn-xs btn-error text-white"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;

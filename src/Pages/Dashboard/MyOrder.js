import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CancelConfirmModal from "./CancelConfirmModal";
import MyOrderRow from "./MyOrderRow";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [cancelingOrder, setCancelingOrder] = useState(null);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/my-order?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyOrder(data));
    }
  }, [user, myOrder, cancelingOrder]);
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral py-4">My Order</h2>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order, index) => (
              <MyOrderRow
                key={order._id}
                order={order}
                index={index}
                setCancelingOrder={setCancelingOrder}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {cancelingOrder && (
        <CancelConfirmModal
          cancelingOrder={cancelingOrder}
          setCancelingOrder={setCancelingOrder}
        ></CancelConfirmModal>
      )}
    </div>
  );
};

export default MyOrder;

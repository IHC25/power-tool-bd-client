import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CancelConfirmModal from "./CancelConfirmModal";
import MyOrderRow from "./MyOrderRow";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [cancelingOrder, setCancelingOrder] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://salty-eyrie-77802.herokuapp.com/my-order?user=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            navigate("/");
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => setMyOrder(data));
    }
  }, [user, myOrder, cancelingOrder, navigate]);
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral py-4">My Order</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
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

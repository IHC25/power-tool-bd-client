import React from "react";

const CancelConfirmModal = ({ cancelingOrder, setCancelingOrder }) => {
  const { _id } = cancelingOrder;
  const handleCancel = () => {
    fetch(`http://localhost:5000/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setCancelingOrder(null);
          console.log(data);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="cancel-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to cancel Order?
          </h3>
          <div className="modal-action">
            <button onClick={handleCancel} className="btn btn-xs btn-error">
              Yes
            </button>
            <label for="cancel-confirm-modal" className="btn btn-xs">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirmModal;

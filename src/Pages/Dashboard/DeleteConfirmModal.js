import React from "react";

const DeleteConfirmModal = ({ deletingProduct, setDeletingProduct }) => {
  const { _id } = deletingProduct;
  const handleDeleteConfirm = () => {
    fetch(`https://salty-eyrie-77802.herokuapp.com/tools/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setDeletingProduct(null);
          console.log(data);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to Delete this Product?
          </h3>
          <div className="modal-action">
            <button
              onClick={handleDeleteConfirm}
              className="btn btn-xs btn-error"
            >
              Yes
            </button>
            <label for="delete-confirm-modal" className="btn btn-xs">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;

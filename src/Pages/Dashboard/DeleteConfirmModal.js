import React from "react";

const DeleteConfirmModal = ({ deletingProduct, setDeletingProduct }) => {
  const { _id } = deletingProduct;
  const handleDeleteConfirm = () => {
    fetch(`http://localhost:5000/tools/${_id}`, {
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
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to Delete this Product?
          </h3>
          <div class="modal-action">
            <button onClick={handleDeleteConfirm} class="btn btn-xs btn-error">
              Yes
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;

import React, { useEffect, useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deletingProduct, setDeletingProduct] = useState(null);
  useEffect(() => {
    fetch("https://salty-eyrie-77802.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <h2 className="text-2xl text-neutral py-3">Manage Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._id}
                product={product}
                setDeletingProduct={setDeletingProduct}
                index={index}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeleteConfirmModal
          deletingProduct={deletingProduct}
          setDeletingProduct={setDeletingProduct}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;

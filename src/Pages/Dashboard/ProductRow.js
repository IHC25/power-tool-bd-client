import React from "react";

const ProductRow = ({ index, product, setDeletingProduct }) => {
  const { name } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <label
          onClick={() => {
            setDeletingProduct(product);
          }}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error text-white"
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;

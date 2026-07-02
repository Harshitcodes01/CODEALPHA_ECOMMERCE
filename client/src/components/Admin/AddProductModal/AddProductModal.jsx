function AddProductModal({
  open,
  onClose,
}) {

  if (!open) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Add Product</h2>

        <form>

          <input
            placeholder="Product Name"
          />

          <textarea
            placeholder="Description"
          />

          <input
            placeholder="Category"
          />

          <input
            placeholder="Price"
            type="number"
          />

          <input
            placeholder="Stock"
            type="number"
          />

          <input
            type="file"
          />

          <div className="modal-buttons">

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit">
              Save
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default AddProductModal;
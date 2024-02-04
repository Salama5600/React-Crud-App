import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  function formSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", {
        title: title,
        price: price,
      })
      .then(navigate("/"));
  }

  return (
    <div className="AddProducts">
      <div className="container d-flex align-items-center flex-column">
        <h2 className="text-primary">All Products</h2>

        <form onSubmit={formSubmit}>
          <div class="mb-3">
            <label for="Title" class="form-label">
              Product Title
            </label>
            <input
              type="text"
              class="form-control w-100"
              id="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="Price" class="form-label">
              Product Price
            </label>
            <input
              type="number"
              class="form-control w-100"
              id="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="check" />

            <label class="form-check-label" for="check">
              Data is correct
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;

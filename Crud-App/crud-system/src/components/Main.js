import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  function handleDelete(e) {
    const id = e.target.id;
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="main">
      <div className="container d-flex align-items-center flex-column">
        <h2 className="text-primary">All Products</h2>
        <Link className="badge rounded text-bg-primary p-3 m-2 text-decoration-none" role="button" to="AddProducts">
          Add Product
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
              <th scope="col">operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              return (
                <tr>
                  <td >{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <span
                      className="badge rounded text-bg-danger p-2 align-items-center"
                      role="button"
                      onClick={handleDelete}
                      id={product.id}
                    >
                      Deleate
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;

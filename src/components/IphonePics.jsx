import React from "react";
import products from "../data";

function IphonePics() {
  return (
    <div className="container my-5">
      <div className="title">
        <h2 className="text-center mb-4">Iphones</h2>
        <p>The best for the brightest</p>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 gy-4">
        {products?.map((product, i) => {
          return (
            <div className="col" key={i}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={`image ${i + 1}`}
                />
                <div className="card-body">
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IphonePics;

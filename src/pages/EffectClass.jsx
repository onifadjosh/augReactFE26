import axios from "axios";
import React, { useEffect, useState } from "react";

const EffectClass = () => {
  const [name, setname] = useState("josh");
  const [num, setnum] = useState(0);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    console.log("I am working");

    const makeRequest = async () => {
      let response = await axios.get("https://dummyjson.com/products");

      console.log(response.data.products);

      setproducts(response.data.products);
    };

    makeRequest();
  }, []);

  // no dep array - onload it ran, when any state change it runs
  //empty dep array- onload it ran, when any state changes it wont run
  //dep array with state-> onload it will run, when that state changes, it will run again
  return (
    <div>
      <button className="btn btn-dark" onClick={() => setname("Pampam")}>
        {name}
      </button>

      <button className="btn btn-dark" onClick={() => setnum(num + 1)}>
        {num}
      </button>

      <div className="d-flex gap-2 flex-wrap">
        {products.map((prod, index) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={prod.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EffectClass;

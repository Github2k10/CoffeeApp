import { useEffect, useState } from "react";

import { client, urlFor } from "./client";
import { images } from "./constant";
import "./App.scss";

function App() {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [active, setActive] = useState("All Products");

  useEffect(() => {
    const query = "*[_type == 'coffee']";

    client.fetch(query).then((data) => {
      setItems(data);
      setFilterItems(data);
    });
  }, []);

  const handleItemsFilter = (item) => {
    setActive(item);

    setTimeout(() => {
      if (item === "All Products") {
        setFilterItems(items);
      } else {
        setFilterItems(items.filter((it) => it.Avilable === "yes"));
      }
    }, 500);
  };

  return (
    <>
      <div className="bg-img"></div>
      <div className="container">
        <div className="container-box">
          <h1>Our Collection</h1>
          <p className="p-text">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="item-filter">
            {["All Products", "Available Now"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemsFilter(item)}
                className={`${active === item ? "active" : ""} `}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="items-list">
            {filterItems.map((item) => (
              <div className="item" key={item.name}>
                <img src={urlFor(item.img)} alt="" />
                <div className="item-title">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <div className="item-cont">
                  <img
                    src={item.rating > 0 ? images.Star_fill : images.Star}
                    alt="coffee Image"
                  />
                  <p>
                    {item.rating > 0 ? item.rating : ""}
                    {item.rating > 0 ? (
                      <span>({item.vote} votes)</span>
                    ) : (
                      <span>No ratings</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="item">
            <img src={images.coffee} alt="" />
            <div className="item-title">
              <h3>Cappuccino</h3>
              <p>$5.20</p>
            </div>
            <div className="item-cont">
              <img src={images.Star_fill} alt="" />
              <p>
                4.7<span>(65 votes)</span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;

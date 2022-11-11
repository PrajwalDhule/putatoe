import React from "react";
import almondMilkImg from "../assets/images/almondMilk.png";
import categories from "../data/categories";

const Category = (props) => {
  return (
    <div className="category-body">
      {props.categories.map((category) => {
        return (
          <>
            <p className="category-title">{category.title}</p>
            <div className="line"></div>
            <div className="category-items">
              {category.items.map((item) => {
                return (
                  <div className="category-item">
                    <img src={item.img} />
                    <p>{item.itemName}</p>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Category;

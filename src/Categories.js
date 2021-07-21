import React from "react";

const Categories = ({ items, filterItems }) => {
  let categories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={() => console.log(filterItems("all"))}
      >
        all
      </button>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

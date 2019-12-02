import React from "react";

const Categories = ({ categories, activeCategory, onChangeCategory }) => {
  return (
    <div
      style={{
        width: "25%",
        background: "#fed36c",
        minHeight: "100vh",
        padding: "10px"
      }}
    >
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <Category
            key={category}
            category={category}
            activeCategory={activeCategory}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </ul>
    </div>
  );
};

const Category = ({ category, activeCategory, onChangeCategory }) => {
  return (
    <li>
      <a
        href="#"
        onClick={() => onChangeCategory(category)}
        style={{ fontWeight: category === activeCategory ? "bold" : "normal" }}
      >
        {category}
      </a>
    </li>
  );
};

export default Categories;

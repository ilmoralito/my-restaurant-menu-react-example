import React, { useState } from "react";
import Categories from "../Categories";
import Dishes from "../Dishes";
import Summary from "../Summary";
import menu from "../../data";
import "./App.css";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("mainDishes");
  const [order, setOrder] = useState([]);

  const changeCategoryHandler = category => setActiveCategory(category);

  const selectDishHandler = ({ name, price, count = 1 }) => {
    if (!order.find(item => item.name === name)) {
      setOrder([...order, { name, price, count, isEditing: false }]);

      return false;
    }

    setOrder(
      order.map(item =>
        item.name === name ? { ...item, count: item.count + 1 } : { ...item }
      )
    );
  };

  const editOrderHandler = name =>
    setOrder(
      order.map(item =>
        item.name === name
          ? { ...item, isEditing: !item.isEditing }
          : { ...item }
      )
    );

  const updateOrderHandler = ({ name, count }) =>
    setOrder(
      order.map(item =>
        item.name === name ? { ...item, count, isEditing: false } : { ...item }
      )
    );

  const cancelEditOrderHandler = name =>
    setOrder(
      order.map(item =>
        item.name === name ? { ...item, isEditing: false } : { ...item }
      )
    );

  const deleteOrderHandler = name =>
    setOrder(order.filter(item => item.name !== name));

  const payHandler = () => {
    if (order.some(item => item.isEditing)) {
      alert("Finish update order before pay");

      return false;
    }

    alert(JSON.stringify(order, null, 2));

    setActiveCategory("mainDishes");
    setOrder([]);
  };

  return (
    <div className="container">
      <Categories
        categories={Object.keys(menu)}
        activeCategory={activeCategory}
        onChangeCategory={changeCategoryHandler}
      />
      <Dishes
        dishes={menu[activeCategory].dishes}
        onSelectDish={selectDishHandler}
      />
      <Summary
        order={order}
        onEditOrder={editOrderHandler}
        onUpdateOrder={updateOrderHandler}
        onCancelEditOrder={cancelEditOrderHandler}
        onDeleteOrder={deleteOrderHandler}
        onPay={payHandler}
      />
    </div>
  );
};

export default App;

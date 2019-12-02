import React from "react";

const Dishes = props => {
  return (
    <div
      style={{
        width: "25%",
        background: "#fff2d5",
        minHeight: "100vh",
        padding: "10px"
      }}
    >
      <h1>Dishes</h1>
      {props.dishes.map(dish => (
        <Dish {...dish} onSelectDish={props.onSelectDish} />
      ))}
    </div>
  );
};

const Dish = ({ name, description, price, onSelectDish }) => {
  return (
    <div style={{ border: "1px solid #dddddd" }}>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>${price}</td>
          </tr>
          <tr>
            <td>
              <button onClick={() => onSelectDish({ name, price })}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dishes;

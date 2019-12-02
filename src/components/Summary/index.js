import React, { useState, useEffect } from "react";

const Summary = props => {
  return (
    <div
      style={{
        width: "50%",
        background: "#ffffff",
        minHeight: "100vh",
        padding: "10px"
      }}
    >
      <h1>Summary</h1>
      {props.order.length === 0 ? null : (
        <div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Name</th>
                <th style={{ textAlign: "left" }}>Price</th>
                <th style={{ textAlign: "left" }}>Count</th>
                <th style={{ textAlign: "left" }}>Total</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {props.order.map(item => (
                <Order
                  {...item}
                  onEditOrder={props.onEditOrder}
                  onUpdateOrder={props.onUpdateOrder}
                  onCancelEditOrder={props.onCancelEditOrder}
                  onDeleteOrder={props.onDeleteOrder}
                />
              ))}
              <tr>
                <td colSpan={3}>Total to pay</td>
                <td>
                  {props.order.reduce(
                    (total, currentValue) =>
                      total + currentValue.price * currentValue.count,
                    0
                  )}
                </td>
                <td colSpan={2} />
              </tr>
            </tbody>
          </table>
          <button onClick={props.onPay}>Pay</button>
        </div>
      )}
    </div>
  );
};

const Order = ({
  name,
  price,
  count,
  isEditing,
  onEditOrder,
  onUpdateOrder,
  onCancelEditOrder,
  onDeleteOrder
}) => {
  const [newCount, setNewCount] = useState(count);

  useEffect(prevState => {
    setNewCount(count);
  }, [count]);

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={newCount}
            onChange={event => setNewCount(+event.target.value)}
          />
        ) : (
          count
        )}
      </td>
      <td>{price * count}</td>
      <td>
        {isEditing ? (
          <button onClick={() => onUpdateOrder({ name, count: newCount })}>
            Confirm
          </button>
        ) : (
          <button onClick={() => onEditOrder(name)}>Edit</button>
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={() => onCancelEditOrder(name)}>Cancel</button>
        ) : (
          <button onClick={() => onDeleteOrder(name)}>Delete</button>
        )}
      </td>
    </tr>
  );
};

export default Summary;

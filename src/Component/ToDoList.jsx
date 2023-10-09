import React, { useEffect, useState } from "react";
import "../Component/ToDoList.css";

const getLocalItems = () => {
  let data = localStorage.getItem("list");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [newItem, setNewItem] = useState("");

  const [addItem, setAddItem] = useState(getLocalItems());

  const inputChange = (event) => {
    setNewItem(([event.target.name] = event.target.value));
  };

  const onClickAddItems = () => {
    if (!newItem) {
      return false;
    } else {
      setAddItem([...addItem, newItem]);
      setNewItem("");
    }
  };

  const onClickDeleteItems = (index) => {
    setAddItem(
      addItem.filter((element, id) => {
        if (id !== index) {
          return true;
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(addItem));
  }, [addItem]);


  return (
    <>
      <section id="todo-list">
        <section id="todo-list-box">
          {/* Heading */}
          <div className="heading-div">
            <h1 className="heading"># To-Do List</h1>
          </div>

          {/* Add Items */}
          <div className="add-input-div">
            <input
              type="text"
              className="text-input"
              placeholder="What to do Today ?"
              value={newItem}
              onChange={inputChange}
              name="input_item"
            />
            <button className="add-btn" onClick={onClickAddItems}>
              +
            </button>
          </div>

          {/* Added Items */}
          <div className="add-item-div">
            <div>
              {addItem.map((item, index) => {
                return (
                  <li key={index + 1} id={index}>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        onClickDeleteItems(index);
                      }}
                    >
                      +
                    </button>
                    <span>{item}</span>
                  </li>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ToDoList;

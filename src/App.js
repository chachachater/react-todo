import logo from "./logo.svg";
import "./App.css";
import { TodoItem } from "./components";
import styled from "styled-components";
import React, { useState, useRef } from "react";

function App() {
  const handleButtonClick = () => {
    setTodos([
      ...todos,
      {
        id: idRef.current,
        content: values,
        idDone: false,
      },
    ]);
    setValues("");
    idRef.current++;
  };
  const handleInputChange = (e) => {
    setValues(e.target.value);
  };
  const [values, setValues] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, content: "fuck u", isDone: true },
    { id: 2, content: "not yet", isDone: false },
  ]);
  // 不需要修改 state(不想重新 render) 的話可以用 ref
  const idRef = useRef(3);
  // 刪除 > 使用 filter
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // 修改 > 使用 map
  const handleIsDoneButton = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };
  return (
    <div className="app">
      <input
        className="input-block"
        type="text"
        placeholder="to do what?"
        value={values}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Add</button>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleIsDoneButton={handleIsDoneButton}
        />
      ))}
    </div>
  );
}

export default App;

import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, { todo: [] });

  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {/* Render list of Todo Components here */}
      <ul>
        {state.todo.map((todo, key) => {
          return (
            <div key={key}>
            <Todo key1={key} todo={todo} dispatch={dispatch}/>
              {/* <li key={`listItem_${key}`}>{todo}</li>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: key })}
              >
                Delete
              </button> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

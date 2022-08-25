import React, { useReducer } from "react";

const Todo = (props) => {
 
  return (
    <div className="todo">
      {" "}
      <div className="todo- title"><li >{props.todo}</li>
      </div>
      <button className="todo- delete" onClick={() => props.dispatch({ type: "DELETE", payload: props.key1 })}>
        Delete
      </button>
      
    </div>
  );
};

export { Todo };

//Todolist.js
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { MdModeEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';

const TodoList = ({ todo, handleToggle, deleteTask, setEdittask }) => {
  return (
    <ListGroup>
      {todo.map((task) => (
        <ListGroup.Item key={task.id} className={`d-flex justify-content-between align-items-center ${task.completed ? "completed todo-list-item" : "todo-list-item"}` }>
          <div className="ms-2 me-auto">
            <div className={`fw-bold ${task.completed ? "text-decoration-line-through" : ""}`}>{task.title}</div>
            {task.description}
          </div>
          <Button variant="outline-success" onClick={() => handleToggle(task.id)}><FaCheck /></Button>
          <Button variant="outline-primary" onClick={() => setEdittask(task)}><MdModeEdit /></Button>
          <Button variant="outline-danger" onClick={() => deleteTask(task.id)}><FaTrash /></Button>
      </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

TodoList.defaultProps = {
  todo: [],
};

export default TodoList;

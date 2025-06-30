import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { MdModeEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';

const Todolist = ({ todo, handleToggle, deleteTask, setEdittask }) => {
  return (
    <ListGroup>
      {todo.map((task) => (
        <ListGroup.Item
          key={task.id}
          className={`d-flex justify-content-between align-items-start flex-column flex-md-row todo-list-item ${
            task.completed ? "bg-success text-white" : ""
          }`}
        >
          <div className="ms-2 me-auto">
            <div className={`fw-bold ${task.completed ? "text-white" : ""}`}>
              {task.title}
            </div>
            <div className={`${task.completed ? "text-white" : ""}`}>
              {task.description}
            </div>
            <div className={`small ${task.completed ? "text-white" : "text-muted"}`}>
              <strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()} &nbsp;
              <strong>Time:</strong> {task.appointmentTime || task.time || "Not set"}
            </div>
          </div>
          <div className="d-flex gap-2 mt-2 mt-md-0">
            <Button variant={task.completed ? "light" : "outline-success"} size="sm" onClick={() => handleToggle(task.id)}>
              <FaCheck />
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => setEdittask(task)}>
              <MdModeEdit />
            </Button>
            <Button variant="outline-danger" size="sm" onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

Todolist.defaultProps = {
  todo: [],
};

export default Todolist;

//AddTask.js
import { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function AddTask({ addTask, editTask, editingTask, clearEditing }) {
  const [input, setInput] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
  });

  useEffect(() => {
    if (editingTask) {
      setInput(editingTask);
    } else {
      setInput({ title: '', description: '', priority: 'Medium', dueDate: '' });
    }
  }, [editingTask]);

  function handleInput(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingTask) {
      editTask({ ...input, id: editingTask.id });
    } else {
      addTask(input);
    }
    setInput({ title: '', description: '', priority: 'Medium', dueDate: '' });
    clearEditing();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} >
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={input.title} onChange={handleInput} placeholder="Enter task title..." required />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" name="dueDate" value={input.dueDate} onChange={handleInput} placeholder="Select due date" required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={input.description} onChange={handleInput} rows={3} placeholder="Enter task description..." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Control as="select" name="priority" value={input.priority} onChange={handleInput} >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">{editingTask ? 'Update Task' : 'Add Task'}</Button>
      </Form>
    </div>
  );
}

export default AddTask;

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
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" name="title" value={input.title} onChange={handleInput} placeholder="Enter patient's name" required />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>MRID number</Form.Label>
            <Form.Control type="number" name="mrid" value={input.mrid} onChange={handleInput} placeholder="Enter patient's MRID number" required />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" name="dueDate" value={input.dueDate} onChange={handleInput} placeholder="Select due date" required />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control type="time" name="appointmentTime" value={input.appointmentTime} onChange={handleInput} placeholder="Select appointment time" required />
          </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3">
          <Form.Label>Medical Condition</Form.Label>
          <Form.Control as="textarea" name="description" value={input.description} onChange={handleInput} rows={3} placeholder="Enter patient's medical condition" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Specialists</Form.Label>
          <Form.Control as="select" name="priority" value={input.priority} onChange={handleInput} >
            <option>Cardiologist</option>
            <option>Neurologist</option>
            <option>Oncologist</option>
            <option>Gynecologist</option>
            <option>Ophhalmologist</option>
            <option>Orthopedics</option>
            <option>Dermatologist</option>
          </Form.Control>
        </Form.Group>
        </Row>
        <Button variant="primary" type="submit">{editingTask ? 'Update Task' : 'Add Task'}</Button>
      </Form>
    </div>
  );
}

export default AddTask;

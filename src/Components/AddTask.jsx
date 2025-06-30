import { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function AddTask({ addTask, editTask, editingTask, clearEditing, todolist }) {
  const [input, setInput] = useState({
    title: '',
    description: '',
    priority: 'consulting',
    dueDate: '',
    appointmentTime: '',
    mrid: '',
  });

  useEffect(() => {
    if (editingTask) {
      setInput(editingTask);
    } else {
      setInput({
        title: '',
        description: '',
        priority: 'consulting',
        dueDate: '',
        appointmentTime: '',
        mrid: '',
      });
    }
  }, [editingTask]);

  function handleInput(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const appointmentDateTime = new Date(`${input.dueDate}T${input.appointmentTime}`);
    const now = new Date();

    if (appointmentDateTime < now) {
      alert("❌ Appointment cannot be scheduled in the past.");
      return;
    }

    const isDuplicateMRID = todolist.some(
      (task) =>
        task.mrid === input.mrid &&
        (!editingTask || editingTask.id !== task.id)
    );
    if (isDuplicateMRID) {
      alert("❌ Patient with this MRID already exists.");
      return;
    }

    const isTimeConflict = todolist.some(
      (task) =>
        task.dueDate === input.dueDate &&
        task.appointmentTime === input.appointmentTime &&
        (!editingTask || editingTask.id !== task.id)
    );
    if (isTimeConflict) {
      alert("❌ Appointment already exists for this date and time.");
      return;
    }

    if (editingTask) {
      editTask({ ...input, id: editingTask.id });
    } else {
      addTask(input);
    }

    setInput({
      title: '',
      description: '',
      priority: 'consulting',
      dueDate: '',
      appointmentTime: '',
      mrid: '',
    });
    clearEditing();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <h6><Form.Label>Patient Name</Form.Label></h6>
            <Form.Control
              type="text"
              name="title"
              value={input.title}
              onChange={handleInput}
              placeholder="Enter patient's name"
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <h6><Form.Label>MRID number</Form.Label></h6>
            <Form.Control
              type="number"
              name="mrid"
              value={input.mrid}
              onChange={handleInput}
              placeholder="Enter patient's MRID number"
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <h6><Form.Label>Due Date</Form.Label></h6>
            <Form.Control
              type="date"
              name="dueDate"
              value={input.dueDate}
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <h6><Form.Label>Appointment Time</Form.Label></h6>
            <Form.Control
              type="time"
              name="appointmentTime"
              value={input.appointmentTime}
              onChange={handleInput}
              required
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <h6><Form.Label>Medical Condition</Form.Label></h6>
            <Form.Control
              as="textarea"
              name="description"
              value={input.description}
              onChange={handleInput}
              rows={3}
              placeholder="Enter patient's medical condition"
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          {editingTask ? 'Update Task' : 'Add Task'}
        </Button>
      </Form>
    </div>
  );
}

export default AddTask;

import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Todolist from './Components/Todolist';
import AddTask from './Components/AddTask';
import CalendarComponent from './Components/Calendar';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [edittask, setEdittask] = useState(null);
  const [filter, setFilter] = useState('all');

  function handleToggle(id) {
    let mapped = todolist.map(task => task.id === id ? { ...task, completed: !task.completed } : {...task});
    setTodolist(mapped);
  }

  function clearEditing() {
    setEdittask(null);
  }

  function deleteTask(id) {
    let filtered = todolist.filter(task => task.id !== id);
    setTodolist(filtered);
  }

  function addTask(input) {
    const newTask = {
      id: todolist.length + 1,
      title: input.title,
      description: input.description,
      priority: input.priority,
      dueDate: input.dueDate,
      time: input.time, 
      completed: false,
    };
    setTodolist([...todolist, newTask]);
  }

  function editTask(updatedTask) {
    const updatedTasks = todolist.map(task => task.id === updatedTask.id ? updatedTask : task);
    setTodolist(updatedTasks);
    clearEditing();
  }

  function getFilteredTasks() {
    if (filter === 'all') return todolist;
    if (filter === 'completed') return todolist.filter(task => task.completed);
    if (filter === 'incomplete') return todolist.filter(task => !task.completed);
    return todolist.filter(task => task.priority === filter);
  }

  function updateFilter(newFiltervalue){
    setFilter(newFiltervalue);
  }

  return (
    <Container fluid="md">
      <Row>
      <div className="doctor-header">
      <img src="https://via.placeholder.com/60" />
  <div>
    <h1>Dr. Sarah Johnson</h1>
    <p>Cardiology • Central Hospital</p>
  </div>
</div>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='my-4'>
        <Col>
          <h1 className='text-dark'>{edittask ? "Edit Task" : "Doctor's To-Do List"}</h1>
          <AddTask addTask={addTask} editTask={editTask} editingTask={edittask} clearEditing={clearEditing}/>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h1 className='text-dark'>Tasks</h1>
          <Todolist todo={getFilteredTasks()} handleToggle={handleToggle} deleteTask={deleteTask} setEdittask={setEdittask}/>
        </Col>
        <Col md={2}>
          <Form.Select aria-label="Filter-tasks" onChange={(e) => updateFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
            <option value="consulting">Consulting</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <h1 className='text-dark'>Calendar</h1>
          <CalendarComponent todolist={getFilteredTasks()}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

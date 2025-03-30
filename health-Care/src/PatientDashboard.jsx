
import React, { useState } from "react";
import './PatientDashboard.css'
const PatientDashboard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <p>Your personalized healthcare management portal</p>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Book Appointments</h2>
          <p>Easily schedule appointments with your preferred doctors.</p>
          <button className="dashboard-button">Book Now</button>
        </section>

        <section className="dashboard-section">
          <h2>View Doctors</h2>
          <p>Explore our list of highly qualified doctors.</p>
          <button className="dashboard-button">View Doctors</button>
        </section>

        <section className="dashboard-section">
          <h2>Manage Healthcare</h2>
          <p>Access and manage your health records and prescriptions.</p>
          <button className="dashboard-button">Manage Records</button>
        </section>

        <section className="dashboard-section">
          <h2>Upcoming Appointments</h2>
          <p>Check your upcoming appointments and details.</p>
          <button className="dashboard-button">View Appointments</button>
        </section>

        <section className="dashboard-section">
          <h2>Notifications</h2>
          <p>Stay updated with the latest notifications regarding your healthcare.</p>
          <button className="dashboard-button">View Notifications</button>
        </section>

        <section className="dashboard-section">
          <h2>To-Do List</h2>
          <p>Manage your daily healthcare tasks efficiently.</p>
          <div className="todo-container">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
              className="todo-input"
            />
            <button onClick={handleAddTodo} className="dashboard-button">Add Task</button>
          </div>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <button onClick={() => handleRemoveTodo(index)} className="todo-remove-button">Remove</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PatientDashboard;


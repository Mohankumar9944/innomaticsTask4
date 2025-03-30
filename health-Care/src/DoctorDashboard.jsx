import React, { useState } from "react";
import './DoctorDashboard.css'
const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2025-04-01", time: "10:00 AM" },
    { id: 2, patientName: "Jane Smith", date: "2025-04-02", time: "2:00 PM" },
  ]);

  const [availability, setAvailability] = useState({
    startTime: "",
    endTime: "",
  });

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSetAvailability = () => {
    alert(`Availability set from ${availability.startTime} to ${availability.endTime}`);
    setAvailability({ startTime: "", endTime: "" });
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Doctor Dashboard</h1>
        <p>Manage your appointments, tasks, and availability effortlessly.</p>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Upcoming Appointments</h2>
          <ul className="appointments-list">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="appointment-item">
                <p><strong>Patient:</strong> {appointment.patientName}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard-section">
          <h2>Set Availability</h2>
          <div className="availability-form">
            <input
              type="time"
              value={availability.startTime}
              onChange={(e) => setAvailability({ ...availability, startTime: e.target.value })}
              placeholder="Start Time"
              className="availability-input"
            />
            <input
              type="time"
              value={availability.endTime}
              onChange={(e) => setAvailability({ ...availability, endTime: e.target.value })}
              placeholder="End Time"
              className="availability-input"
            />
            <button onClick={handleSetAvailability} className="dashboard-button">
              Set Availability
            </button>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>To-Do List</h2>
          <div className="todo-container">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="todo-input"
            />
            <button onClick={handleAddTask} className="dashboard-button">
              Add Task
            </button>
          </div>
          <ul className="todo-list">
            {tasks.map((task, index) => (
              <li key={index} className="todo-item">
                {task}
                <button onClick={() => handleRemoveTask(index)} className="todo-remove-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard-section">
          <h2>Notifications</h2>
          <p>Stay updated with important announcements and patient requests.</p>
          <button className="dashboard-button">View Notifications</button>
        </section>

        <section className="dashboard-section">
          <h2>Analytics</h2>
          <p>Gain insights into your appointments, patient visits, and more.</p>
          <button className="dashboard-button">View Analytics</button>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;


import React, { useState } from "react";
import './AdminDashboard.css'
const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Doctor", status: "Pending" },
    { id: 2, name: "Jane Smith", role: "Patient", status: "Active" },
    { id: 3, name: "Alice Johnson", role: "Doctor", status: "Approved" },
    { id: 4, name: "Bob Brown", role: "Admin", status: "Active" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleApproveUser = (userId) => {
    setUsers(users.map(user => (user.id === userId ? { ...user, status: "Approved" } : user)));
  };

  const handleRejectUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const filteredUsers = users.filter(user => {
    const matchesRole = filter === "All" || user.role === filter;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Oversee user management, appointments, and platform operations.</p>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Manage Users</h2>
          <div className="filters-container">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Roles</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    {user.status === "Pending" && (
                      <>
                        <button
                          className="dashboard-button"
                          onClick={() => handleApproveUser(user.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="dashboard-button reject"
                          onClick={() => handleRejectUser(user.id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="dashboard-section">
          <h2>Appointments Overview</h2>
          <p>Monitor and manage upcoming appointments.</p>
          <button className="dashboard-button">View Appointments</button>
        </section>

        <section className="dashboard-section">
          <h2>Platform Analytics</h2>
          <div className="analytics-preview">
            <p>Active Users: {users.filter(user => user.status === "Active").length}</p>
            <p>Pending Approvals: {users.filter(user => user.status === "Pending").length}</p>
          </div>
          <button className="dashboard-button">View Full Analytics</button>
        </section>

        <section className="dashboard-section">
          <h2>Notifications</h2>
          <p>Review important system notifications and alerts.</p>
          <button className="dashboard-button">View Notifications</button>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;


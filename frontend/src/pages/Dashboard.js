import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await axios.get('/api/tasks', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div>
      <h2>Task Dashboard</h2>
      {tasks.map(task => (
        <div key={task._id} onClick={() => navigate(`/tasks/${task._id}`)}>
          <h3>{task.title}</h3>
          <p>{task.priority} | {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
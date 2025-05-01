import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(res => setTask(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    navigate('/dashboard');
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskDetails;
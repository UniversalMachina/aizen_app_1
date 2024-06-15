// src/components/AddInterview.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddInterview = () => {
  const [candidate, setCandidate] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInterview = {
      candidate,
      email,
      position,
      date,
      status,
    };

    fetch('http://127.0.0.1:5000/interview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInterview),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error adding interview:', error));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Interview</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="candidate">Candidate Name</label>
          <input
            type="text"
            id="candidate"
            className="form-input w-full"
            value={candidate}
            onChange={(e) => setCandidate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            className="form-input w-full"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-input w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            className="form-input w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex items-center gap-2"
        >
          Add Interview
        </button>
      </form>
    </div>
  );
};

export default AddInterview;

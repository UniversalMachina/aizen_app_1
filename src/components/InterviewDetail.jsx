// src/components/InterviewDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const InterviewDetail = () => {
  const { id } = useParams();
  const [interview, setInterview] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/interview/${id}`)
      .then(response => response.json())
      .then(data => setInterview(data))
      .catch(error => console.error('Error fetching interview details:', error));
  }, [id]);

  if (!interview) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Interview Details</h1>
      <div className="border rounded-lg p-4">
        <div className="mb-4">
          <strong>Candidate:</strong> {interview.candidate}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {interview.email}
        </div>
        <div className="mb-4">
          <strong>Position:</strong> {interview.position}
        </div>
        <div className="mb-4">
          <strong>Date:</strong> {interview.date}
        </div>
        <div className="mb-4">
          <strong>Status:</strong> {interview.status}
        </div>
        <Link to="/" className="text-blue-500 hover:underline">Back to Interview List</Link>
      </div>
    </div>
  );
};

export default InterviewDetail;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import InterviewList from './components/InterviewList';
import AddInterview from './components/AddInterview';
import InterviewDetail from './components/InterviewDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<InterviewList />} />
          <Route path="/add-interview" element={<AddInterview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// src/components/InterviewList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InterviewList = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/interviews')
      .then(response => response.json())
      .then(data => setInterviews(data))
      .catch(error => console.error('Error fetching interviews:', error));
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Interviews</h1>
        <Link to="/add-interview">
          <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            New Interview
          </button>
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&_:has([role=checkbox])]:pr-0">
                  Candidate
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&_:has([role=checkbox])]:pr-0">
                  Position
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&_:has([role=checkbox])]:pr-0">
                  Date
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&_:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&_:has([role=checkbox])]:pr-0 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {interviews.map((interview) => (
                <tr
                  key={interview.id}
                  className="border-b transition-colors data-[state=selected]:bg-muted group hover:bg-gray-100/50 dark:hover:bg-gray-800/50 cursor-pointer"
                >
                  <td className="p-4 align-middle [&_:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img
                          className="aspect-square h-full w-full"
                          alt="Candidate"
                          src="/placeholder-user.jpg"
                        />
                      </span>
                      <div>
                        <div className="font-medium">{interview.candidate}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {interview.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&_:has([role=checkbox])]:pr-0">
                    {interview.position}
                  </td>
                  <td className="p-4 align-middle [&_:has([role=checkbox])]:pr-0">
                    {interview.date}
                  </td>
                  <td className="p-4 align-middle [&_:has([role=checkbox])]:pr-0">
                    <div
                      className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      data-v0-t="badge"
                    >
                      {interview.status}
                    </div>
                  </td>
                  <td className="p-4 align-middle [&_:has([role=checkbox])]:pr-0 text-right">
                    <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 group-hover:flex hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span className="sr-only">View Interview</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterviewList;

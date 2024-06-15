import './App.css'
import { useState } from 'react'

function App() {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;

    const res = await fetch('http://localhost:5000/generate-linkedin-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResponse(data.message);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Create LinkedIn Post</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="prompt" className="block font-medium text-gray-700 dark:text-gray-300">
                Prompt
              </label>
              <textarea
                id="prompt"
                name="prompt"
                rows="3"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                placeholder="Enter your prompt..."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Generate Post
              </button>
            </div>
          </form>
          {response && (
            <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-700 rounded-md text-blue-800 dark:text-blue-100">
              {response}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App

import './App.css';
import { useState } from 'react';

function App() {
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target.image.files[0]);
    formData.append('title', e.target.title.value);

    try {
      const response = await fetch('http://localhost:5000/api/generate-post', {
        method: 'POST',
        body: formData,
      });
      const data = await response.text();
      setResponseMessage(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Create LinkedIn Post</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Upload an image to generate a LinkedIn post</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                id="image"
                accept="image/*"
                type="file"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                id="title"
                placeholder="Enter a title"
                type="text"
              />
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
              type="submit"
            >
              Generate Post
            </button>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-sm text-gray-900 dark:text-gray-100">
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

import './App.css'

function App() {

  return (
    <>
<div class="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
  <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4 text-center">Create LinkedIn Post</h1>
    <form class="space-y-4">
      <div>
        <label for="prompt" class="block font-medium text-gray-700 dark:text-gray-300">
          Prompt
        </label>
        <textarea
          id="prompt"
          name="prompt"
          rows="3"
          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          placeholder="Enter your prompt..."
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Generate Post
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default App

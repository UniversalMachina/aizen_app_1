// src/App.jsx
import React from 'react';

const App = () => {
  return (
<>


<div class="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
  <div class="w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20 bg-white rounded-lg shadow-sm">
    <div class="space-y-8">
      <div class="text-center">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">LinkedIn Post Generator</h1>
        <p class="mt-3 text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto">
          Upload an audio file and a PDF to generate engaging LinkedIn posts.
        </p>
      </div>
      <div class="space-y-6">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="audio"
          >
            Audio File
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
            id="audio"
            accept="audio/*"
            type="file"
          />
        </div>
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="pdf"
          >
            PDF File
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
            id="pdf"
            accept="application/pdf"
            type="file"
          />
        </div>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full"
          type="submit"
        >
          Generate LinkedIn Posts
        </button>
      </div>
    </div>
  </div>
</div>

</>
  );
};

export default App;

import React, { useState } from "react";
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleTextChange = (event) => setText(event.target.value);

  const handleSummarize = async () => {
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Error:", error);
      setSummary("Failed to generate summary.");
    }
  };

  return (
    <div className="container">
      <h1>AI Text Summarizer</h1>
      <div className="flex-container">
        <div className="flex-item">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text to summarize"
            rows="6"
            style={{ width: "100%" }}
          />
          <button onClick={handleSummarize}>Summarize</button>
        </div>
        <div className="flex-item">
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

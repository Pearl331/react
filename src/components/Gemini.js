import axios from "axios";
import React, { useEffect, useState } from "react";
import './Gemini.css'; // External CSS file for better styling

function Gemini() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [screenSize, setScreenSize] = useState(window.innerWidth); // Track screen size

  // Function to handle window resizing and update screen size state
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // Hook to handle resize events
  useEffect(() => {
    window.addEventListener("resize", handleResize); // Add event listener on mount

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run once on mount

  // Function to generate answer from API
  async function generateAnswer() {
    setAnswer("loading...");

    try {
      // Gemini API request
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY", // Replace with actual API key
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      // Set the answer
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("An error occurred.");
    }
  }

  return (
    <div className="gemini-container">
      <h1>Ask Gemini</h1>
      <textarea
        className="gemini-textarea"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Gemini anything"
      ></textarea>
      <button
        className="gemini-button"
        onClick={generateAnswer}
      >
        Generate Answer
      </button>
      <pre className="gemini-answer">
        {answer}
      </pre>
    </div>
  );
}

export default Gemini;

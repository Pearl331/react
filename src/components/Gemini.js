import React, { useState, useEffect } from "react";
import axios from "axios";

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

  // Adjust textarea height based on screen size
  const getTextareaHeight = () => {
    if (screenSize <= 480) {
      return "120px"; // Mobile screens
    } else if (screenSize <= 768) {
      return "150px"; // Tablets
    } else {
      return "200px"; // Desktops
    }
  };

  // Function to generate answer from API
  async function generateAnswer() {
    setAnswer("loading...");

    try {
      // Gemini API request
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAezRLFpfqszcvps707mdlBVbbVk2c_F5I", // Replace with actual API key
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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Ask Gemini</h1>
      <textarea
        style={{
          width: "100%",
          height: getTextareaHeight(),
          padding: "10px",
          fontSize: screenSize <= 480 ? "14px" : "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "20px",
          resize: "none",
        }}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Gemini anything"
      ></textarea>
      <button
        onClick={generateAnswer}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "12px 20px",
          fontSize: screenSize <= 480 ? "14px" : "16px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Generate Answer
      </button>
      <pre
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          width: "100%",
          fontSize: screenSize <= 480 ? "12px" : "16px",
          color: "#212529",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          marginTop: "20px",
        }}
      >
        {answer}
      </pre>
    </div>
  );
}

export default Gemini;

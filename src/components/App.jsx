import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading..");

    try {
      const response = await axios({
        url: "http://localhost:5000/api/summarize", // Backend server endpoint
        method: "post",
        data: {
          text: question, // User input sent to backend
        },
      });

      // Response from backend (summarized text)
      setAnswer(response.data.summary);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("An error occurred.");
    }
  }

  return (
    <>
      <div className="w-full"> </div>
      <h1 className="bg-blue-300">CHAT-AI</h1>
      <textarea
        className="border rounded w-full"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10"
        placeholder="Ask anything to me"
      ></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre> {/* Display the answer */}
    </>
  );
}

export default App;

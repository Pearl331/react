import axios from "axios";
import { useState } from "react";

function Gemini() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading...");

    try {
      // Gemini API request
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAezRLFpfqszcvps707mdlBVbbVk2c_F5I",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      
      // Set the answer
      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("An error occurred.");
    }
  }

  return (
    <div>
      <h1>Ask Gemini</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Gemini anything"
      ></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre>
    </div>
  );
}

export default Gemini;

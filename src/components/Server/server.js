const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Endpoint to handle summary generation
app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  try {
    // Call Gemini AI's API
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY", // Replace with actual key and endpoint
      method: "post",
      data: {
        contents: [{ parts: [{ text }] }],
      },
    });

    // Send the summary from Gemini AI's response
    res.json({
      summary: response.data.candidates[0].content.parts[0].text, // Extracted summary
    });
  } catch (error) {
    console.error("Error in Gemini API:", error);
    res.status(500).send("Error generating summary.");
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

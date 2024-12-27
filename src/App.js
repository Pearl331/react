import axios from "axios";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import Gemini from "./components/Gemini";
import Heading from "./components/Heading.js";
import HotAccessories from "./components/HotAccessories.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import Navbar from "./components/Navbar.js";
import NavOptios from "./components/NavOptios.js";
import Offers from "./components/Offers.js";
import PreNavbar from './components/PreNavbar';
import ProductReviews from "./components/ProductReviews.js";
import Slider from "./components/Slider.js";
import StarProduct from "./components/StarProduct.js";
import Videos from "./components/Videos.js";
import data from "./data/data.json";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Function to generate answer from Chat AI
  const generateAnswer = async () => {
    setAnswer("Loading...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB1NG92-TjJ0SLmwcesCN6h8rLLcPpGGl0", // Make sure you replace with your actual API key
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      console.log(response.data); // Log the response to see the structure

      // If response is correct, set answer
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer(`An error occurred: ${error.response ? error.response.data.error.message : error.message}`);
    }
  };

  return (
    <>
      {/* Chat-AI Section Toggle Button */}
      <div className="navbar-chat-button">
        <button onClick={() => setShowChat(prev => !prev)}>
          {showChat ? "Close Chat-AI" : "Open Chat-AI"}
        </button>
      </div>

      {/* Chat-AI Section */}
      {showChat && (
        <div className="chat-section">
          <h1>CHAT-AI</h1>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            cols="30"
            rows="10"
            placeholder="Ask anything to me"
          ></textarea>
          <button onClick={generateAnswer}>Generate Answer</button>
          <pre>{answer}</pre>
        </div>
      )}

      {/* Main Router Section */}
      <Router>
        <PreNavbar />
        <Navbar />
        <NavOptios
          miPhones={data.miPhones}
          redmiPhones={data.redmiPhones}
          tv={data.tv}
          laptop={data.laptop}
          fitnessAndLifeStyle={data.fitnessAndLifeStyle}
          home={data.home}
          audio={data.audio}
          accessories={data.accessories}
        />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        {/* Routes */}
        <Routes>
          <Route
            path="/music"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
          <Route
            path="/smartDevice"
            element={
              <HotAccessories
                smartDevice={data.hotAccessories.smartDevice}
                smartDeviceCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HotAccessories
                home={data.hotAccessories.home}
                homeCover={data.hotAccessoriesCover.home}
              />
            }
          />
          <Route
            path="/lifestyle"
            element={
              <HotAccessories
                lifeStyle={data.hotAccessories.lifeStyle}
                lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          />
          <Route
            path="/mobileAccessories"
            element={
              <HotAccessories
                mobileAccessories={data.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  data.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          />
          <Route path="/gemini" element={<Gemini />} />
        </Routes>

        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner} />
        <Footer footer={data.footer} />
      </Router>
    </>
  );
}

export default App;

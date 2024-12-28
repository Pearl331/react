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
    
    // Handle website-related questions
    const questionLower = question.toLowerCase();

    // Laptop-related questions
    if (questionLower.includes("laptop") || questionLower.includes("laptops")) {
      setAnswer("We have a variety of laptops. Visit our 'Laptop' section to explore different models and choose the one that suits your needs.");
      return;
    }

    // Mobile phone-related questions
    if (questionLower.includes("mobile") || questionLower.includes("phone") || questionLower.includes("smartphone")) {
      setAnswer("You can browse and buy different mobile phones from our 'Mobile' section. We have various models for you to choose from.");
      return;
    }

    // Tablet-related questions
    if (questionLower.includes("tablet")) {
      setAnswer("We have a great selection of tablets in our 'Tablet' section. Check them out for more details.");
      return;
    }

    // Hot Accessories related questions
    if (questionLower.includes("accessories")) {
      setAnswer("You can find a wide range of accessories like phone cases, chargers, and more in our 'Hot Accessories' section.");
      return;
    }

    // Payment-related questions
    if (questionLower.includes("payment") || questionLower.includes("pay")) {
      setAnswer("We offer secure payment options, including credit cards, debit cards, and PayPal. Simply choose your preferred payment method during checkout.");
      return;
    }

    // Product reviews related questions
    if (questionLower.includes("reviews") || questionLower.includes("review")) {
      setAnswer("You can check out customer reviews for our products in the 'Product Reviews' section.");
      return;
    }

    // Sign up / login related questions
    if (questionLower.includes("login") || questionLower.includes("sign in")) {
      setAnswer("To log in to your account, click on the 'Login' button at the top-right of the page and enter your credentials.");
      return;
    }

    if (questionLower.includes("sign up") || questionLower.includes("create account")) {
      setAnswer("To sign up, click on the 'Sign Up' button on the homepage and fill in your details.");
      return;
    }

    // Purchase-related questions
    if (questionLower.includes("buy") || questionLower.includes("purchase") || questionLower.includes("order")) {
      setAnswer("To buy a product, select it from our catalog, click on 'Add to Cart', and proceed to checkout.");
      return;
    }

    // Questions outside the website's scope
    setAnswer("Sorry, I can only help with questions related to our products, services, and purchasing process. Please ask about laptops, mobiles, accessories, or other items available on our website.");
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
            placeholder="Ask anything about our website"
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

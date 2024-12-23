import React, { useEffect, useState } from 'react';
import "../styles/NavOptios.css";
import NavCard from "./NavCard.js";

const NavOptios = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [activeToggle, setActiveToggle] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;

            switch (hash) {
                case "#miphones":
                    setActiveToggle("miPhones");
                    break;
                case "#redmiphones":
                    setActiveToggle("redmiPhones");
                    break;
                case "#tv":
                    setActiveToggle("tv");
                    break;
                case "#laptops":
                    setActiveToggle("laptop");
                    break;
                case "#lifestyle":
                    setActiveToggle("fitnessAndLifeStyle");
                    break;
                case "#home":
                    setActiveToggle("home");
                    break;
                case "#audio":
                    setActiveToggle("audio");
                    break;
                case "#accessories":
                    setActiveToggle("accessories");
                    break;
                default:
                    setActiveToggle("");
                    break;
            }
        };

        // Initial check and event listener
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        // Cleanup listener on component unmount
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const renderCards = (items) => {
        return items.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ));
    };

    return (
        <div className="navOptions">
            {activeToggle === "miPhones" && renderCards(miPhones)}
            {activeToggle === "redmiPhones" && renderCards(redmiPhones)}
            {activeToggle === "tv" && renderCards(tv)}
            {activeToggle === "laptop" && renderCards(laptop)}
            {activeToggle === "fitnessAndLifeStyle" && renderCards(fitnessAndLifeStyle)}
            {activeToggle === "home" && renderCards(home)}
            {activeToggle === "audio" && renderCards(audio)}
            {activeToggle === "accessories" && renderCards(accessories)}
        </div>
    );
};

export default NavOptios;

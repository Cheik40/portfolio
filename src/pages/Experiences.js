import NavBar from "../components/navbar/NavBar";
import Experiences from "../components/experiences/ExperiencesComposant";
import React, { useEffect, useState } from "react";
import "../styles/experiences.css"; // Fichier CSS pour les styles

function Experience() {
    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY;

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const cls = visible ? "visible" : "hidden";
    const head = visible ? "Header fix" : "Header";
    return (
        <div>
            <div className={head}>
                <div className={cls}>
                    <NavBar />
                </div>
            </div>
            <Experiences />
        </div>
    );
}

export default Experience;

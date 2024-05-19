import Layout from "./layout/Layout";
import React, { useState } from "react";
import "../../styles/navbar.css";

function NavBar() {
    const logoResponsiveClick = require("../../assets/logos/menu50.png");
    const [classActive, setclassActive] = useState(false);

    const handlOnClick = (e) => {
        e.preventDefault();
        setclassActive((classActive) => (classActive ? false : true));
    };

    return (
        <div className='navbar'>
            <div className='nameAutor'>Cheikh NDIAYE</div>
            <Layout active={classActive ? "nav_ul active" : "nav_ul"} />

            <div className='mobile'>
                <button className='mobileButton' onClick={handlOnClick}>
                    <img src={logoResponsiveClick} alt='Logo Menu responsive' />{" "}
                </button>
            </div>
        </div>
    );
}

export default NavBar;

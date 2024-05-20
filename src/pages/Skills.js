// import NavBar from "../components/navbar/NavBar";

// function Skills() {
//     return (
//         <div>
//             <NavBar />
//             <h1> Skills </h1>
//         </div>
//     );
// }

// export default Skills;
import { IoLogoReact } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import NavBar from "../components/navbar/NavBar";
import "../styles/skills.css";
const imgCheikh = require("../assets/images/djily.png");
function Skills() {
    return (
        <div className='skills'>
            <NavBar />
            <div className='bodySkills'>
                <div className='boxImageCheikh'>
                    <img
                        className='imageCheikh'
                        src={imgCheikh}
                        alt='Cheikh NDIAYE'
                    />
                </div>
                <div className='description'>
                    <h1>Mes competences</h1>
                    <div className='block'>
                        <div className='iconJavascript'>
                            <IoLogoReact
                                style={{ width: "auto", height: "100%" }}
                            />
                            React
                        </div>
                        <div className='iconJavascript'>
                            <SiJavascript
                                style={{ width: "auto", height: "100%" }}
                            />
                            Javascript
                        </div>
                        <div className='iconJavascript'>
                            <SiHtml5
                                style={{ width: "auto", height: "100%" }}
                            />
                            HTML5
                        </div>
                        <div className='iconJavascript'>
                            <IoLogoCss3
                                style={{ width: "auto", height: "100%" }}
                            />
                            CSS3
                        </div>
                        <div className='iconJavascript'>
                            <FaGitAlt
                                style={{ width: "auto", height: "100%" }}
                            />
                            Git
                        </div>
                        <div className='iconJavascript'>
                            <FaBootstrap
                                style={{ width: "auto", height: "100%" }}
                            />
                            Bootstrap
                        </div>

                        <div className='iconJavascript'>
                            <IoLogoSass
                                style={{ width: "auto", height: "100%" }}
                            />
                            Sass
                        </div>
                        <div className='iconJavascript'>
                            <FaJava style={{ width: "auto", height: "100%" }} />
                            Java
                        </div>
                        <div className='iconJavascript'>
                            <FaPython
                                style={{ width: "auto", height: "100%" }}
                            />
                            Python
                        </div>
                        <div className='iconJavascript'>
                            <SiMysql
                                style={{ width: "auto", height: "100%" }}
                            />
                            Mysql
                        </div>
                        <div className='iconJavascript'>
                            <SiMongodb
                                style={{ width: "auto", height: "100%" }}
                            />
                            Mongodb
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;

// import NavBar from "../components/navbar/NavBar";

// function Contact() {
//     return (
//         <div>
//             <NavBar />
//             <h1> Contact</h1>
//         </div>
//     );
// }

// export default Contact;

import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar/NavBar";
// import "../styles/NavBarStyles.css";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

function Contact() {
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

    return (
        <React.Fragment>
            <div className='bodyContact'>
                <div className='Header'>
                    <div className={cls}>
                        <NavBar />
                    </div>
                </div>
                <div className='titleDescription'>
                    <h1>Contactez-moi</h1>
                    <div className='descriptionHoraireContact'>
                        Je suis disponible du lundi au vendredi de 9h à 18h
                    </div>
                </div>

                <div className='conteneurGridContact'>
                    <div className='box'>
                        <div className='logoTel'>
                            <BsFillTelephoneInboundFill
                                style={{ width: "auto", height: "100%" }}
                            />
                        </div>
                        <h2 className='titleTel'>Par téléphone</h2>
                        <div className='telephone'>
                            Appelez-moi au +33 7 52 55 82 97
                        </div>
                    </div>
                    <div className='box boorderMidle'>
                        <div className='logoMail'>
                            <SiGmail
                                style={{ width: "auto", height: "100%" }}
                            />
                        </div>
                        <h2 className='titleMail'>Par email</h2>
                        <div className='mail'>
                            Ecrivez-moi sur l'adresse mail :<br />
                            djilyhoo@gmail.com
                        </div>
                    </div>
                    <div className='box'>
                        <div className='logoInstagram'>
                            <Link
                                className='Link'
                                to='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'
                            >
                                <SiLinkedin
                                    style={{ width: "auto", height: "100%" }}
                                />
                            </Link>
                        </div>
                        <h2 className='titleInstagram'>Par email</h2>
                        <div className='instagram'>
                            Ecrivez-moi sur l'adresse Linkedin :<br />
                            djilyhoo@gmail.com
                        </div>
                    </div>

                    <div className='box'>
                        <div className=''>
                            <Link
                                className='Link'
                                to='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'
                            >
                                <SiLinkedin
                                    style={{ width: "auto", height: "100%" }}
                                />
                            </Link>
                        </div>
                        <h2 className='titleInstagramd'>Par email</h2>
                        <div className='instagrams'>
                            Ecrivez-moi sur l'adresse Linkedin :<br />
                            djilyhoo@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;

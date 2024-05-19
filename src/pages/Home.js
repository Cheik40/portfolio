import NavBar from "../components/navbar/NavBar";
import "../styles/home.css";
const imgCheikh = require("../assets/images/djily.png");
function Home() {
    return (
        <div className='home'>
            <NavBar />
            <div className='bodyHome'>
                <div className='boxImageCheikh'>
                    <img
                        className='imageCheikh'
                        src={imgCheikh}
                        alt='Cheikh NDIAYE'
                    />
                </div>
                <div className='descriptionHome'>
                    <h1>Développeur Front-end</h1>
                    <div className='descrioptionCheikh'>
                        Bonjour ! <br />
                        Je suis Cheikh NDIAYE, un passionné de développement
                        basé à Paris.
                        <br />
                        <br /> Depuis que j'ai découvert ma passion pour le
                        codage, je suis constamment à la recherche de nouveaux
                        défis et de projets stimulants.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

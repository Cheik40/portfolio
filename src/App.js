import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experiences";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
    // const location = useLocation();
    // const location = useLocation();
    return (
        <BrowserRouter>
            <TransitionGroup>
                <CSSTransition
                    // key={location.key}
                    classNames='fade'
                    timeout={3000}
                >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='competence' element={<Skills />} />
                        <Route path='projet' element={<Project />} />
                        <Route path='experience' element={<Experience />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='*' element={<NoPage />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </BrowserRouter>
    );
}

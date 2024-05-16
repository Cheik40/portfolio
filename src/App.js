// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experiences";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='competence' element={<Skills />} />
                <Route path='projet' element={<Project />} />
                <Route path='experience' element={<Experience />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

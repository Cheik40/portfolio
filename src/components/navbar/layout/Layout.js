import { Outlet, Link, useLocation } from "react-router-dom";
import "../../../styles/navbar.css";

function Layout({ active }) {
    const location = useLocation();
    return (
        <nav>
            <ul className={active}>
                <li>
                    <Link
                        className={
                            location.pathname === "/" ? "Link active" : "Link"
                        }
                        to='/'
                    >
                        À propos
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            location.pathname === "/competence"
                                ? "Link active"
                                : "Link"
                        }
                        to='/competence'
                    >
                        compétence
                    </Link>
                </li>
                {/* <li>
                    <Link className='Link' to='/projet'>
                        projet
                    </Link>
                </li> */}
                <li>
                    <Link
                        className={
                            location.pathname === "/experience"
                                ? "Link active"
                                : "Link"
                        }
                        to='/experience'
                    >
                        Expérience
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            location.pathname === "/contact"
                                ? "Link active"
                                : "Link"
                        }
                        to='/contact'
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Layout;

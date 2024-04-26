import { Outlet, Link } from "react-router-dom";
import "../../../styles/navbar.css";

function Layout({ active }) {
    return (
        <nav>
            <ul className={active}>
                <li>
                    <Link className='Link' to='/'>
                        À propos
                    </Link>
                </li>
                <li>
                    <Link className='Link' to='/competence'>
                        compétence
                    </Link>
                </li>
                <li>
                    <Link className='Link' to='/projet'>
                        projet
                    </Link>
                </li>
                <li>
                    <Link className='Link' to='/experience'>
                        Expérience
                    </Link>
                </li>
                <li>
                    <Link className='Link' to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Layout;

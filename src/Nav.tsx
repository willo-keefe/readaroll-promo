import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav className="p-2 m-1 mb-4 mx-auto d-flex justify-content-start align-items-center border-bottom">
                <Link to="/" className=" m-1 mx-3 mb-3 link" title="Home">
                    Home
                </Link>
                <Link to="/about" className="m-1 mx-4 mb-3 link" title="About">
                    About
                </Link>
        </nav>
    );
};

export default Nav;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Nav: React.FC = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <nav className="p-2 m-1 mb-4 mx-auto d-flex justify-content-start align-items-center border-bottom">
                <Link to="/" className=" m-1 mx-3 mb-3 link" title="Home">
                    Home
                </Link>
                    <Link to="/about" className="m-1 mx-3 mb-3 link" title="About">
                        About
                    </Link>
                    {isAuthenticated ? (
                        <Link to="/dashboard" className="m-1 mx-3 mb-3 link" title="Dashboard">
                            Dashboard
                        </Link>
                    ) : (
                        <Link to="/login" className="m-1 mx-3 mb-3 link" title="Login">
                            Login
                        </Link>
                    )}
        </nav>
    );
};

export default Nav;
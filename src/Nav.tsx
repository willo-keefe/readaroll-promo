import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Nav: React.FC = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <nav className="p-3 m-3 flex justify-between items-center">
                <Link to="/" className="m-3 link" title="Home">
                    Home
                </Link>
                <Link to="/about" className="m-3 link" title="About">
                    About
                </Link>
                {isAuthenticated ? (
                    <div>
                        <Link to="/dashboard" className="m-3 link" title="Dashboard">
                            Dashboard
                        </Link>
                    </div>
                ) : (
                    <Link to="/login" className="m-3 link" title="Login">
                        Login
                    </Link>
                )}
        </nav>
    );
};

export default Nav;
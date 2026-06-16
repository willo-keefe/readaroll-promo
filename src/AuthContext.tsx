import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        fetch("https://readaroll-backend-production.up.railway.app/protected", { credentials: "include" }).then(res => {
            setIsAuthenticated(res.ok);
        }).catch(() => {
            setIsAuthenticated(false);
        });
    }, []);

    const login = async (email: string, password: string) => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const res = await fetch("https://readaroll-backend-production.up.railway.app/login", {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            setIsAuthenticated(true);
        }
        else {
            MySwal.fire("Your login attempt was not successful. Please try again.");
        }
    };

    const logout = async () => {
        const res = await fetch("https://readaroll-backend-production.up.railway.app/logout", {
            method: "POST",
            credentials: "include",
        });
        if (res.ok) {
            setIsAuthenticated(false);
        }
        else {
            MySwal.fire("Your logout attempt was not successful. Please try again.");
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
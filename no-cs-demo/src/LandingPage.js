import React from "react";
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

const LandingPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p><strong>Welcome to Code Splitting - Demo</strong></p>
                <p>
                    <Link to="/normal" >
                        Normal Page
                    </Link>
                </p>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default LandingPage;

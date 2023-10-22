import React from "react";
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

const LandingPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <strong>Welcome to Code Splitting - Demo</strong>
                </p>
                <div className='link-view'>
                    <Link to="/normal" >
                        Normal Page
                    </Link>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
};

export default LandingPage;

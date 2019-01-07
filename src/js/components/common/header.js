import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">Films App</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <NavLink to="/" exact className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/dashboard/" className="nav-item nav-link">Dashboard</NavLink>
                        <NavLink to="/list/" className="nav-item nav-link">List</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}
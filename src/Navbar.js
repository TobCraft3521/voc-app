import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
    return (
        <nav>
            <h1>Vocabulary app</h1>
            <div className="links">
                <Link to="/">Start</Link>
                <Link to="/open">Open</Link>
                <Link to="/view">Create</Link>
                <Link to="/view">View</Link>
            </div>
        </nav>
    )
}

import React from "react";
import { Link } from "react-router-dom";
export function Start({ handleData }) {
    const handleOpenFile = () => {

    }
    return (
        <div>
            <h1>Start</h1>
            <div className="button">
                <Link to="/viewpresets">Load preset</Link>
            </div>
            <div className="button" onClick={handleOpenFile}>
                Open from file
            </div>
            <div className="button">
                <Link to="/view">Create new set</Link>
            </div>
        </div>
    )
}

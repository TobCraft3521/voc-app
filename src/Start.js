import React from "react";
import { Link } from "react-router-dom";
export function Start({ handleData }) {
    const handleOpenFile = () => {

    }
    return (
        <div>
            <h1>Start</h1>
            <br />
            <div className="button-85">
                <Link style={{ color: "white" }} to="/viewpresets">Load preset</Link>
            </div>
            <div className="button-85" onClick={handleOpenFile}>
                Open from file
            </div>
            <div className="button-85">
                <Link style={{ color: "white" }} to="/view">Create new set</Link>
            </div>
        </div>
    )
}

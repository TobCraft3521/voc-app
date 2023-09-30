import React from "react";
import { Link } from "react-router-dom";
export function Start({ handleData }) {
    return (
        <div>
            <h1>Start</h1>
            <div className="button">
               <Link to="/viewpresets">Load preset</Link> 
            </div>
            <div className="button">
                Open from file
            </div>
            <div className="button">
                Create new set
            </div>
        </div>
    )
}

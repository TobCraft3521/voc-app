import React from "react";
import { Link } from "react-router-dom";
export function Start({ handleData }) {
    const handleFile = (e) => {

    }

    return (
        <div>
            <h1>Start</h1>
            <br />

            <Link style={{ color: "white" }} to="/viewpresets">  <div className="button-85">Load preset </div></Link>
            <div className="button-85" onClick={() => { document.getElementById("fileselector").click() }}>
                Open from file
                <input type="file" id="fileselector" style={{ display: "none" }} onChange={handleFile}/>
            </div>
            <Link style={{ color: "white" }} to="/view">    <div className="button-85">Create new set </div></Link>
        </div>
    )
}

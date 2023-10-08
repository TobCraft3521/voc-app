import React from "react";
import { Link } from "react-router-dom";
export function Start({ handleData }) {
    const handleFile = (e) => {
        const file = e.target.files[0]
        if (!file.name.endsWith(".json")) { alert("Please select a valid file with a .json ending."); return }
        const reader = new FileReader()
        let content = ""
        reader.onload = (ev) => {
            content = ev.target.result
            console.log(content)
            const json = JSON.parse(content)
            handleData(json)
        }
        reader.readAsText(file, "UTF-8")

    }

    return (
        <div>
            <h1>Start</h1>
            <br />

            <Link style={{ color: "white" }} to="/viewpresets">  <div className="button-85">Load preset </div></Link>
            <div className="button-85" onClick={() => { document.getElementById("fileselector").click() }}>
                Open from file
                <input type="file" id="fileselector" style={{ display: "none" }} onChange={handleFile} />
            </div>
            <Link style={{ color: "white" }} to="/view"> <div className="button-85">Create new set </div> </Link>
        </div>
    )
}

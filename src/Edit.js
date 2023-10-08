import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

const Edit = ({ onChange, set, imgs, title, description }) => {
    const handleAdd = (e) => {
        const newData = Object.create(rowData)
        newData.push({ languageA: "", languageB: "", imageURL: "" })
        setRowData(newData)
    }

    const handleChange = (e) => {
        //parse data
        const newData = {}
        rowData.forEach((data) => {
            console.log(data)
            newData[data.languageA] = data.languageB
        })
        onChange(newData, imgs, title, description)
    }

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        //format rowData
        const newData = []
        for (const key in set) {
            const data = {}
            data.languageA = key
            data.languageB = set[key]
            if (imgs[key]) data.imageURL = imgs[key]
            newData.push(data)
        }
        setRowData(newData)
    }, [set])

    const [columnDefs] = useState([
        { field: "languageA", editable: true },
        { field: "languageB", editable: true },
        { field: "imageURL", editable: true }
    ]);

    return (
        <div>
            { /* width 601 to remove the scrollbar */}
            <div className="ag-theme-alpine" style={{ width: "min(601px,100vw)", height: "75vh" }}>
                <AgGridReact rowData={rowData} columnDefs={columnDefs} onCellValueChanged={handleChange} />
            </div>
            <div style={{display:"flex"}}>
                <div className="button-85" style={{ margin: "20px" , maxWidth:"13vw" }} onClick={handleAdd}>Back</div>
                <div className="button-85" style={{ margin: "20px" , maxWidth:"13vw" }} onClick={handleAdd}>Add entry</div>
            </div>
        </div>
    );
}

export default Edit;
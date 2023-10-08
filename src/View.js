import { Link } from "react-router-dom";

const View = ({ set, setSet }) => {
    const handleRename = () => {
        const updatedSet = Object.create(set)
        set.title = prompt("Enter new title")
        setSet(updatedSet)
    }

    const handleDescriptionChange = () => {
        const updatedSet = Object.create(set)
        set.description = prompt("Enter new description")
        setSet(updatedSet)
    }

    const handleSave = () => {
        download("test")
    }

    const download = (text) => {

    }

    return (
        <div className="set">
            <div style={{ display: "flex" }} ><h1>{set.title}</h1> <svg onClick={handleRename} style={{ background: "#b3b3b3", borderRadius: "5px", padding: "4px", transform: "translate(10px,10px)", cursor: "pointer" }} fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.837 282.837" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M19.539,246.006c-1.412-1.413-2.995-2.159-4.576-2.159c-2.361,0-4.33,1.676-5.266,4.482l-9.24,27.723 c-0.701,2.103-0.591,3.95,0.309,5.201c0.736,1.021,1.959,1.584,3.443,1.584c0.79,0,1.655-0.155,2.571-0.461l27.722-9.241 c2.36-0.786,3.907-2.267,4.355-4.167c0.448-1.9-0.273-3.916-2.032-5.675L19.539,246.006z"></path> <path d="M280.205,48.279L234.553,2.627C232.86,0.934,230.599,0,228.189,0c-2.41,0-4.67,0.934-6.363,2.627L51.892,172.561 c-3.212,3.212-6.993,9.33-8.429,13.638l-7.417,22.252c-1.503,4.508,0.008,10.909,3.368,14.27l20.697,20.697 c2.403,2.403,6.48,3.957,10.388,3.957c0,0,0,0,0.001,0c1.404,0,2.71-0.198,3.881-0.589l22.253-7.417 c4.309-1.436,10.426-5.217,13.637-8.428L280.205,61.007C283.714,57.498,283.714,51.788,280.205,48.279z M252.535,70.896 L166.8,156.631c-2.929,2.929-6.768,4.393-10.607,4.393s-7.678-1.465-10.606-4.393c-5.858-5.857-5.858-15.355,0-21.213 l85.735-85.735c5.857-5.857,15.355-5.857,21.213,0C258.393,55.54,258.393,65.038,252.535,70.896z"></path> </g> </g></svg></div>
            <div style={{ display: "flex" }} ><h3>{set.description}</h3> <svg onClick={handleDescriptionChange} style={{ background: "#b3b3b3", borderRadius: "5px", padding: "4px", transform: "translate(10px,0px)", cursor: "pointer" }} fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.837 282.837" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M19.539,246.006c-1.412-1.413-2.995-2.159-4.576-2.159c-2.361,0-4.33,1.676-5.266,4.482l-9.24,27.723 c-0.701,2.103-0.591,3.95,0.309,5.201c0.736,1.021,1.959,1.584,3.443,1.584c0.79,0,1.655-0.155,2.571-0.461l27.722-9.241 c2.36-0.786,3.907-2.267,4.355-4.167c0.448-1.9-0.273-3.916-2.032-5.675L19.539,246.006z"></path> <path d="M280.205,48.279L234.553,2.627C232.86,0.934,230.599,0,228.189,0c-2.41,0-4.67,0.934-6.363,2.627L51.892,172.561 c-3.212,3.212-6.993,9.33-8.429,13.638l-7.417,22.252c-1.503,4.508,0.008,10.909,3.368,14.27l20.697,20.697 c2.403,2.403,6.48,3.957,10.388,3.957c0,0,0,0,0.001,0c1.404,0,2.71-0.198,3.881-0.589l22.253-7.417 c4.309-1.436,10.426-5.217,13.637-8.428L280.205,61.007C283.714,57.498,283.714,51.788,280.205,48.279z M252.535,70.896 L166.8,156.631c-2.929,2.929-6.768,4.393-10.607,4.393s-7.678-1.465-10.606-4.393c-5.858-5.857-5.858-15.355,0-21.213 l85.735-85.735c5.857-5.857,15.355-5.857,21.213,0C258.393,55.54,258.393,65.038,252.535,70.896z"></path> </g> </g></svg></div>
            <br />
            There are {Object.keys(set.a).length} entries (vocabulary pairs) in this set
            <br />
            <Link to="/edit" > <div className="button-85">Edit</div></Link>
            <a
                href={URL.createObjectURL(new Blob([JSON.stringify({ a: set.a, imgs: set.imgs, title: set.title, description: set.description })], { type: "application/json" }))}
                download={set.title + ".json"}>
                <div className="button-85" onClick={handleSave}> Save to file </div>
            </a>
        </div>
    );
}

export default View;
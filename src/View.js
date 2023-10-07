import { Link } from "react-router-dom";

const View = ({ set,title }) => {

    return (
        <div className="set">
            <h1>{title}</h1>
            <br />
            <div className="stats">
                There are {Object.keys(set.a).length} entries (vocabulary pairs) in this set
                <Link to="/edit" > <div className="button">Edit</div></Link>
            </div>
        </div>
    );
}

export default View;
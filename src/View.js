import { Link } from "react-router-dom";

const View = ({ set }) => {

    return (
        <div className="set">
            <div className="stats">
                There are {set.a.length} entries (vocabulary pairs) in this set
                <Link to="/edit" > <div className="button">Edit</div></Link>
            </div>
        </div>
    );
}

export default View;
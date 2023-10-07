const Edit = ({ onChange, set }) => {

    const handleAdd = () => {

    }

    const handleChange = (id) => {

    }

    return (
        <div>
            <table onChange={handleChange} spellCheck="false">
                <thead>
                    <tr>
                        <th>Language 1</th>
                        <th>Language 2</th>
                        <th>Image url</th>
                        <th>Actions</th>
                    </tr>
                    <tr style={{ background: "#ff9900" }}>
                        <td contentEditable> </td>
                        <td contentEditable> </td>
                        <td contentEditable> </td>
                        <td> <div className="tablebutton" style={{ background: "#fff", color: "black" }} onClick={handleAdd} contentEditable="false">Add</div> </td>
                    </tr>
                </thead>
                <tfoot>
                    {
                        //render set
                        set.map((ent, index) => {
                            return (
                                <tr>
                                    <td>a</td>
                                </tr>
                            )
                        })
                    }
                </tfoot>
            </table>

        </div>
    );
}

export default Edit;
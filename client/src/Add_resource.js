import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useParams } from "react-router";
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

const AddResource = ({ edit, setEdit }) => {

    const [url, setUrl] = useState(edit.url);
    const [registered, setRegistered] = useState(false)
    const [error, setError] = useState(false)

    const { id } = useParams();

    const navigate = useNavigate();
    let operation = ""

    if (edit.url !== "")
        operation = "updateResource/"

    const handleSubmit = (event) => {
        event.preventDefault();
        setRegistered(true)
        const body = {
            url
        }

        if (edit.url === "") {
            axios.post('admin/addResource/' + id, body).then((res) => {
                //localStorage.setItem('token', res.token)
                console.log(res)


                setRegistered(false)
                setError(false)
                navigate('/')
            }).catch((err => {
                console.log(err)
                setError(true)
                setRegistered(false)
            }))
        }
        else {

            console.log(id)
            console.log(edit._id)

            axios.patch('admin/updateResource/' + edit._id, body).then((res) => {
                //localStorage.setItem('token', res.token)
                console.log(res)


                setRegistered(false)
                setError(false)
                navigate('/resources/'+edit.owner)
            }).catch((err => {
                console.log(err)
                setError(true)
                setRegistered(false)
            }))
        }
    }

    return (
        <div className="signup-content">
            {/* <div>
                <img src="/images/ninja1.svg" alt="" />
            </div> */}

            <div className="login-box">

                <form onSubmit={handleSubmit}>
                    <h1>Add Resource</h1>
                    <div className="textbox">

                        <input
                            type="text"
                            value={url}
                            required
                            onChange={(event) => setUrl(event.target.value)}
                            placeholder="Url" />
                    </div>


                    {error && <h6 style={{ color: "red" }}> No such user exist </h6>}
                    {!registered && <button className="btn btn-outline-success" id="show-login" type="submit" style={{ color: "white" }}>{edit.title === "" ? "Add" : "Update"}</button>}
                    {registered && <button className="btn btn-outline-success" id="show-login" type="submit" disabled style={{ color: "white" }}>{edit.title === "" ? "Adding..." : "Updateing..."}</button>}

                </form>

            </div>


        </div>
    )
}

export default AddResource;
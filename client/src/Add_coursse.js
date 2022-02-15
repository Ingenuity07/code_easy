import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')


const AddCource = ({ edit, setEdit }) => {

    const [title, setTitle] = useState(edit.title);
    const [src, setSrc] = useState(edit.src);
    const [registered, setRegistered] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setRegistered(true)
        const body = {
            title,
            src
        }

        if (edit.title === "") {
            axios.post('admin/addCourse', body).then((res) => {
                 console.log(res)

                setRegistered(false)
                setError(false)
                navigate('/')
            }).catch((err => {
                console.log(err)
                setError(true)
            }))
        }
        else {
            axios.patch('admin/updateCourse/' + edit._id, body).then((res) => {
                //localStorage.setItem('token', res.token)
                console.log(res)

                setRegistered(false)
                setError(false)
                navigate('/')
            }).catch((err => {
                console.log(err)
                setError(true)
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
                    <h1>Add Course</h1>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            value={title}
                            required
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Title" />
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input
                            type="text"
                            required
                            value={src}
                            onChange={(event) => setSrc(event.target.value)}
                            placeholder="Image URL" />
                    </div>
                    {error && <h6 style={{ color: "red" }}> No such user exist </h6>}
                    {!registered && <button className="btn btn-outline-success" id="show-login" type="submit" style={{ color: "white" }}>{edit.title === "" ? "Add" : "Update"}</button>}
                    {registered && <button className="btn btn-outline-success" id="show-login" type="submit" disabled style={{ color: "white" }}>{edit.title === "" ? "Adding..." : "Updateing..."}</button>}

                </form>

            </div>


        </div>
    )
}

export default AddCource;
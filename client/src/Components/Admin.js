import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Admin = ({admin,setAdmin}) => {
    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registered,setRegistered] = useState(false)
    const [error,setError] = useState(false)
    
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        setRegistered(true)
        const body = {
            email,
            password
        }

        axios.post('admin/login', body).then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data.token)
            const t= localStorage.getItem('token')
            console.log(t)
            setAdmin(true)
            setRegistered(false)
            setError(false)
            navigate('/')
        }).catch((err => {
            console.log(err)
            setError(true)
            setRegistered(false)
        }))

    }

    return (
        <div className="signup-content">
            {/* <div>
                <img src="/images/ninja1.svg" alt="" />
            </div> */}
            
            <div className="login-box">

                 <form onSubmit={handleSignIn}>
                    <h1>Welcome Back Ninja</h1>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email" />
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Password" />
                    </div>
                    {error&&<h6 style={{color:"red"}}> No such user exist </h6>}
                    {!registered && <button className="btn btn-outline-success" id="show-login" type="submit" style={{ color: "white" }}>Sign-in</button>}
                    {registered && <button className="btn btn-outline-success" id="show-login" type="submit" disabled style={{ color: "white" }}>Signing in...</button>}
                    
                </form>

            </div>


        </div>
    )


}

export default Admin;
// import { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import useFetch from "./useFetch";
// const User = (props) => {
//     const [user, setUser] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [registered, setRegistered] = useState(false);
//     const [choice, setChoice] = useState(true);
//     const history = useHistory();
//     const {data,error,isPending}=useFetch('http://localhost:8000/userinfo');
//     const [mila,setMila]=useState(0);
    
//     console.log(mila);


//     const handleSignUp = (event) => {
//         event.preventDefault();
//         const body = { user, password, email };
//         setRegistered(true);
//         fetch('http://localhost:8000/userinfo', {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(body)
//         }).then(() => {
//             history.push('/');
//             setRegistered(false);
//         })
//     }
//     const handleSignIn =(event)=>{
//         event.preventDefault();
//         setRegistered(true);
//         data.map((element)=>{

//             if(email === element.email && password ===element.password)
//             {
//                 console.log(props)
//                 props.setProfile(true);
//                 props.setUserData(element.id);
//                 setMila(1);
//                 history.push('/');
//             }
//         })
//         if(mila === 0)
//         {
//             setMila(-1);
//             setEmail("");
//             setPassword("");
//             console.log(mila);
//         }

//         setRegistered(false);

//         }
//         const handleSwitch=()=>{
//             setMila(0);
//             setChoice(!choice);
//             console.log(mila);
//             console.log(choice)
//         }
        

//     return (
//         <div className="signup-content">
//             {/* <div>
//                 <img src="/images/ninja1.svg" alt="" />
//             </div> */}
//             {console.log(mila),console.log(choice)}
//             <div className="login-box">

//                 {!choice && <form onSubmit={handleSignUp}>
//                     <h1 >Welcome Ninja</h1>
//                     {console.log(mila),console.log(choice)}
//                     <div className="textbox">
//                         <i className="fas fa-envelope"></i>
//                         <input
//                             type="email"
//                             value={email}
//                             required
//                             onChange={(event) => setEmail(event.target.value)}
//                             placeholder="E-mail" />
//                     </div>

//                     <div className="textbox">
//                         <i className="fas fa-user"></i>
//                         <input
//                             type="text"
//                             value={user}
//                             required
//                             onChange={(event) => setUser(event.target.value)}
//                             placeholder="Username" />
//                     </div>

//                     <div className="textbox">
//                         <i className="fas fa-lock"></i>
//                         <input
//                             type="password"
//                             required
//                             value={password}
//                             onChange={(event) => setPassword(event.target.value)}
//                             placeholder="Password" />
//                     </div>
//                     {mila<0&&<h6 style={{color:"red"}}>No such user exist </h6>}
//                     {!registered && <button className="btn btn-outline-success" id="show-login" type="submit" style={{ color: "white" }}>Sign-up</button>}
//                     {registered && <button className="btn btn-outline-success" id="show-login" type="submit" disabled style={{ color: "white" }}>Signing-up...</button>}
//                     <button className="btn btn-outline-success" onClick={handleSwitch}  style={{ color: "white" }}  >Sign in</button>
//                 </form>}
//                 {choice && <form onSubmit={handleSignIn}>
//                     <h1>Welcome Back Ninja</h1>
//                     {console.log(mila),console.log(choice)}
//                     <div className="textbox">
//                         <i className="fas fa-user"></i>
//                         <input
//                             type="email"
//                             value={email}
//                             required
//                             onChange={(event) => setEmail(event.target.value)}
//                             placeholder="Email" />
//                     </div>

//                     <div className="textbox">
//                         <i className="fas fa-lock"></i>
//                         <input
//                             type="password"
//                             required
//                             value={password}
//                             onChange={(event) => setPassword(event.target.value)}
//                             placeholder="Password" />
//                     </div>
//                     {mila<0&&<h6 style={{color:"red"}}> No such user exist </h6>}
//                     {!registered && <button className="btn btn-outline-success" id="show-login" type="submit" style={{ color: "white" }}>Sign-in</button>}
//                     {registered && <button className="btn btn-outline-success" id="show-login" type="submit" disabled style={{ color: "white" }}>Signing in...</button>}
//                     <button className="btn btn-outline-success" onClick={handleSwitch}  style={{ color: "white" }}  >Create Account</button>

//                 </form>}

//             </div>


//         </div>
//     )


// }

// export default User;
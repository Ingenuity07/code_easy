// import useFetch from "./useFetch";

// const Profile = (props) => {
//     const { data, error, isPending } = useFetch('http://localhost:8000/userinfo/' + props.userData)

//     console.log(props.userData);

//     return (
//         <div >
//             <div className="profile" style={{ color: "white"}}>
//                 <h2></h2>
//                 {error && <div>{error}</div>}
//                 {isPending && <div>Loading...</div>}
//                 {data && (
//                     <div>
//                         <h3>{data.username}</h3>
//                         <hr style={{ color: "white", margin: "2rem" }} />
//                     </div>
//                 )}

//                 <hr style={{ color: "white", margin: "2rem" }} />
//             </div>
//         </div>);
// }

// export default Profile;
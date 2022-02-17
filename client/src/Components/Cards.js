import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import axios from 'axios'
import { useParams } from "react-router";

const Cards = ({ title, setParent, setEdit, edit, admin }) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [dat, setDat] = useState(null)
    const [deleted, setDeleted] = useState(false)
    const [error, seterror] = useState(false)
    useEffect(() => {
        axios.get('/course/getAllCourse')
            .then(res => {
                setDat(res.data)
                //console.log(res.data)
                seterror(false)
            })
            .catch(err => { seterror(true) })

    }, [deleted])

    if (edit.title !== "")
        setEdit({ title: "", src: "", url: "" })

    console.log(id)

    const handleDelete = (id) => {

        const val = window.confirm("You sure wanna delete")
        if (val) {
            axios.delete('/admin/deleteCourse/' + id).then((res) => {
                //localStorage.setItem('token', res.token)
                console.log("deleted")
                setDeleted(!deleted)
                navigate('/')
            }).catch((err => {
                console.log(err)
            }))
        }
    }

    const handleEdit = (element) => {
        setEdit(element)

        console.log(element)

        navigate('/addCourse/' + element._id)
    }


    return (
        <div>

            <h1 style={{ margin: "1rem", color: "white" }} >{title}</h1>
            {error && <div>{error}</div>}
            {!dat && <div>Loading...</div>}
            {dat && <div className="cards-crds">
                {
                    dat.map((element, index) => (

                        <div key={index} >
                            <div >


                                <div className='card-crds'  >

                                    {admin && <div className='course-option'>
                                        <i className="fas fa-edit" onClick={() => handleEdit(element)}></i>
                                        <i className="fas fa-trash " onClick={() => handleDelete(element._id)}></i>
                                    </div>}
                                    <Link to={`/resources/${element._id}`}>
                                        <div onClick={() => setParent(element.title)}>
                                            <div className='home-card-img'>
                                                <img src={element.src} className="card-img-top" alt="hb" />
                                            </div>

                                            <div className="card-body" style={{ color: 'white' }}>
                                                <h5 className="card-title">{element.title}</h5>
                                            </div>
                                        </div>
                                    </Link >
                                </div>

                            </div>

                        </div>
                    ))
                }
                {admin && <div >
                    <Link to={'/addCourse/' + id}>
                        <div className="card card-crds" >
                            <div className='home-card-img'>
                                <span className="card-img-top"  ><i style={{ fontSize: "10rem", marginTop: "1rem" }} className="fas fa-plus"></i></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Add More</h5>

                            </div>
                        </div>
                    </Link>
                </div>}
            </div>
            }




        </div>);
}

export default Cards;
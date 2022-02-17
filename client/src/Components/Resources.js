import { useParams } from "react-router";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import axios from 'axios'

const Resources = ({ parent, setEdit, edit, admin }) => {
    const { id } = useParams();

    // const { data, error, isPending } = useFetch('http://localhost:8000/course/getAllResource/' + id)

    const navigate = useNavigate();

    const [data, setData] = useState(null)
    const [deleted, setDeleted] = useState(false)
    const [error, seterror] = useState(false)


    useEffect(() => {
        axios.get('/course/getAllResource/' + id)
            .then(res => {
                setData(res.data)
                //console.log(res.data)
                seterror(false)
            })
            .catch(err => { seterror(true) })

    }, [deleted])

    if (edit.url !== "")
        setEdit({ title: "", src: "", url: "" })


    const handleDelete = (id) => {


        const val = window.confirm("You sure wanna delete")
        if (val) {
            axios.delete('/admin/deleteResource/' + id).then((res) => {
                //localStorage.setItem('token', res.token)
              
                setDeleted(!deleted)
                navigate('/')
            }).catch((err => {
                
            }))
        }
    }

    const handleEdit = (element) => {
        setEdit(element)
        navigate('/addResource/' + element._id)
    }




    return (

        <div >

            {error && <div>{error}</div>}
            {data && (
                <article >
                    <h2 style={{ color: "white" }}>{parent}</h2>



                    <div className="cards cards-resource">

                        {admin && <Link to={'/addResource/' + id}>
                            <div className="card card-resource resource" style={{ height: "4rem" ,borderBlockColor:"#674cff" }} >
                                
                                    <h4   >Add More</h4>
                                
                            </div>
                        </Link>}


                        {
                            data.map((element, index) => (

                                <div key={index}>

                                    <div >

                                        <div className="card resource"  >
                                            {admin && <div className='resource-option' >
                                                <i className="fas fa-wrench" onClick={() => handleEdit(element)}></i>
                                                <i className="fas fa-trash " onClick={() => handleDelete(element._id)}></i>
                                            </div>
                                            }
                                            <a href={element.url} target="_blank">
                                               
                                               
                                                <div className="card-resource" style={
                                                    {
                                                        paddingTop: "10px",
                                                        paddingBottom: "10px",
                                                        marginTop: "0px",
                                                        marginBottom: "0px"
                                                        
                                                    }}
                                                >
                                                    {/* <div style={{ margin:'auto' }}>
                                                        <img src={element.img} className="card-img-top" alt="hb" />
                                                    </div> */}
                                                    <div className="" >
                                                        <h4 className="card-title">{element.title}</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </article>
            )



            }
        </div>
    );
}

export default Resources;
import { Link } from "react-router-dom";
import axios from 'axios'

const Footer = ({ admin, setAdmin }) => {

  const handleSignOut = ()=>{
    axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token')

    axios.get('admin/logout')
    .then(res=>{setAdmin(null)
      console.log(res)})
    .catch(err=>console.log(err.message))
  }


  return (
    <div >

      <footer className="footer" style={{ color: "white",height:'2rem' }}>

        <div className="container text-center text-md-left mt-5">


          <div className="row mt-3">


            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


              <h6 className="text-uppercase font-weight-bold">Code Easy</h6>
              {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "20px" }} /> */}
              <p>Here you can find the best tutorials and resources for various technologies.</p>

              <div>
                {!admin&&<Link to="/admin">
                  <button className="btn btn-outline-success">
                    Admin
                  </button>
                </Link>}
                {admin&&<Link to="/">
                  <button className="btn btn-outline-danger" onClick={()=>handleSignOut()}>
                    Sign Out
                  </button>
                </Link>}
              </div>


            </div>


            {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

      
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!">MDWordPress</a>
        </p>
        <p>
          <a href="#!">BrandFlow</a>
        </p>
        <p>
          <a href="#!">Bootstrap Angular</a>
        </p>

      </div> */}

            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

     
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div> */}

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              
              <p>  <i className="fa fa-fw fa-envelope mr-3"></i> shivamsi103@gmail.com</p>
              <div>
                
              </div>


            </div>


          </div>


        </div>

        <div className="foot">

          {/* <div className="icons">

            <a className="fb-ic">
              <i className="fa fa-fw fa-facebook fa-2x"> </i>
            </a>

            <a className="tw-ic">
              <i className="fa fa-fw fa-twitter fa-2x"> </i>
            </a>

            <a className="gplus-ic">
              <i className="fa fa-fw fa-google fa-2x"> </i>
            </a>

            <a className="li-ic">
              <i className="fa fa-fw fa-linkedin fa-2x"> </i>
            </a>

            <a className="ins-ic">
              <i className="fa fa-fw fa-instagram fa-2x"> </i>
            </a>

          </div> */}


          {/* <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div> */}

        </div>
      </footer>
    </div>

  );
}

export default Footer;
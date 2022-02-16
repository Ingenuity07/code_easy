import Carousel from './Carousel'
import Cards from './Cards';

const Home = ({setParent,setEdit,edit,admin}) => {


  return (
    <div className="home">

      <section className="bgimage">
        <div>
          <h1>Code Easy</h1>
          <p>"A platform to Learn and Grow"</p>
        </div>
      </section>


      <hr style={{ color: "white", margin: "10px" }} />

      
      <Cards setParent={setParent} admin={admin} setEdit={setEdit} edit={edit}title='All Courses' />

      <hr style={{ color: "white", margin: "10px" }} />
       <Carousel/>
    </div>
  );
}

export default Home;
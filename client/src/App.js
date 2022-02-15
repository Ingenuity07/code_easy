import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Resources from './Resources';
import Home from './Home';
import { useState } from 'react';
import Admin from './Admin';
import AddCource from './Add_coursse';
import AddResource from './Add_resource';

function App() {
  const [parent, setParent] = useState(null);
  const [admin,setAdmin] = useState(null)
  const [edit,setEdit] = useState({title:"",src:"",url:""})

console.log("here")

  return (
    <Router>
      <div className="App">
        <Navbar  admin={admin} setAdmin={setAdmin}/>
        
        <Routes>
          <Route  path='/' element={ <Home admin={admin} setParent={setParent} setEdit={setEdit} edit={edit}/> } />
            
          <Route path='/resources/:id' element={  <Resources admin={admin} parent={parent} edit={edit} setEdit={setEdit} />}/> 
          
          <Route  path='/Admin' element={<Admin admin={admin} setAdmin={setAdmin} />}/>
          
          <Route path='/addCourse' element={ <AddCource edit={edit} setEdit={setEdit}/>  }/>
          
          <Route path='/addResource/:id' element={ <AddResource edit={edit} setEdit={setEdit}/> }/>
          
        </Routes>
        <Footer admin={admin} setAdmin={setAdmin} />
      </div>

    </Router>
  );
}

export default App;

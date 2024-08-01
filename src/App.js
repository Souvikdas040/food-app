import './App.css';
import AddFood from './components/AddFood';
import UpdateFood from './components/UpdateFood';
import DeleteFood from './components/DeleteFood';
import ViewFood from './components/ViewFood';
import SearchFood from './components/SearchFood';
import Food from './components/Food';
import Nav from './components/Nav';
import Register from './components/Register';
import LogIn from './components/LogIn';

// Bootstrap CDN
import "bootstrap/dist/css/bootstrap.css";

//React-router-DOM CDNs
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <h2>FOOD APP</h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/nav" element={<Nav/>}/>
          <Route path="/food" element={<><Nav/><Food/></>}>
          <Route path="addfood" element={<AddFood/>}/>
          <Route path="viewfood" element={<ViewFood/>}/>
          <Route path="updatefood" element={<UpdateFood/>}/>
          <Route path="searchfood" element={<SearchFood/>}/>
          <Route path="deletefood" element={<DeleteFood/>}/>
        </Route>
        <Route path="/contact" element={<><Nav/><Contact/></>}/>
      </Routes>
    </div>
  );
}

export default App;

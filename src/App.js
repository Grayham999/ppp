
import './App.css';
import Navbar from "./components/Navbar";
import AddBooks from './pages/Addbooks';
import Home from "./pages/Home";
import Books from "./pages/Book";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route  path='/books' element = {<Books/>}/>
        <Route  path='/addbooks' element = {<AddBooks/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

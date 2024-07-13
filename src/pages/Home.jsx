import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';


const HOME = () => {
    // const image =require("../images")
    return (
        <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center flex-column'>
            <div className='row container '>
                <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{height: "100%"}}>hello</div>
                <div className='col-lg-6 d-flex justify-content-center align-items-center' style={{height: "100%"}}>hello</div>

        <h2 style={{fontSize: "70px"}}>Gray Has It All</h2>
        <p className= "mb-0"style={{ color: "silver"}}>Checkout The Books From Here</p>
        <Link to= "/books" className='viewBooks my-3 button'>Veiw Books</Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
                style ={{height: "100%"}}
            >
               {/* <img 
                 className='img-fluid homeimg'
                <img src={image} alt="book" className="bookImage" />  */}
            </div>
            </div>
    );
};

export default HOME;
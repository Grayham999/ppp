import React from "react";

const BookSection = ({data})=> {
    console.log(data);
    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            {data && 
            data.map((item, index) => ( 
            <div className="" style={{width: "240px", height: "250px", border: "0px solid white", borderRadius: "10px"}}>
            
            <div>
                <img style={{width: "190px", height: "220px"}} className="img-fluid" src= {item.image} alt="/" />
            </div>
            <div className="py-1 text-white align-items-center justify-content-center d-flex" style={{width: "350px"}}>{item.description}</div>
            <p className="text-white mb-0 px-2">$ {item.price}</p>
            <b>
                <div className="d-flex justify-content-around alighn-items-center">
                <button className="btn btn-primary" > Update</button>
                <button className="btn btn-danger">Delete</button>
                </div>
            </b>

            </div>)
        )}
    </div>
    );
};    

export default BookSection;
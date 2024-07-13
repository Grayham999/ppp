import React from 'react';
import {useState} from "react"
import axios from 'axios';

const AddBooks = () => {
const [Data, setData] = useState({bookname: "", Author: "", Description: "", Price:"", Image: "",})
  const change = (e) => {
    const {name,value} = e.target;
    setData({...Data, [name]: value});
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/add", Data)
    .then((res) => alert(res.data.message));
    
  };
  console.log(Data);
    return <div className="bg-dark d-flex justify-content-center align-items-center" style={{minHeight: "91.5vh"}}>
        <div className='container p-4'>
        <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label text-white">Book Name
    </label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" name= "bookname" onChange={change}
    value={Data.bookname}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label text-white">Author
    </label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name" name="Author" onChange={change} value={Data.Author}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label text-white">Description
    </label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Description" name="Description" onChange={change} value={Data.Description}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label text-white">Image
    </label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter URL of the Image" name="Image" onChange={change} value={Data.Image}/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label text-white">Price
    </label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Price of The Book" name="Price" onChange={change} value={Data.Price}/>
  </div>
  <button className='btn-btn-success' onClick={submit}>Submit</button>
  </div>
  </div>;
};

export default AddBooks;
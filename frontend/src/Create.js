import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Create() {

    const [Name, setName]  = useState('')
    const [Email, setEmail] = useState('')
    const navigate = useNavigate();
  // this.handleSubmit = this.handleSubmit.bind(this);

  function handleSubmit(event)
  {
      event.preventDefault();
      axios.post('http://localhost:8081/create' , {Name,Email})
      .then(res => {
        console.log(res);
        navigate('/');
      }).catch(err => console.log(err));

  }
  

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={handleSubmit}>
            <h2>ADD STUDENTS</h2>
            <div className="mb-4">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Name" className="form-control"
               onChange={e => setName(e.target.value)} 
               />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter Email" className="form-control" 
              onChange={e => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-2">
              <button type="submit" className="btn btn-primary">SUBMIT</button>
            </div>
          </form>   
    </div>
  </div>        
  )
}


export default Create;
import React,{useEffect, useState} from "react";
import axios from 'axios'
import { Link, Navigate, useNavigate } from "react-router-dom";
import Create from "./Create";

function Student(){

     const [student,setStudent] = useState([])

        useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setStudent(res.data))
        .catch(err=>console.log(err));
    })
const navigate = useNavigate();
    const handleDelete =  (id) => {
        
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => navigate('/'))
        .catch(err=>console.log(err));
    }

    return(
       <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>      
            <th>Action</th> 
        </tr>
        </thead>
        <tbody>
            {
                student.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.Name}</td>
                        <td>{data.Email}</td>
                        <td>
                            <link to="/edit" className="btn btn-success">Update</link>
                            <button onClick={e => handleDelete(data.id)} className="btn btn-danger ms-2">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table> 
        </div>
        </div>        
    )
}
export default Student;
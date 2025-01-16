import { useState } from 'react';
import Card from 'react-bootstrap/Card';


   export default function Login()
    {
      const usertype=["Admin","Employee","User"];
      const[selectedUserType,setSelectedUserType]=useState('');
      const[emailid,setEmailid]=useState('');
      const[password,setPassword]=useState('');

      return (
        <Card className='logincard'>
          <Card.Body>
            <Card.Title><h3 className='text-center'>Login</h3></Card.Title>
            <label className='form-label'><b>Select Options:</b></label>
            <select className='form-control' value={selectedUserType} onChange={(e)=>setSelectedUserType(e.target.value)}>
              <option key={0}>--Choose Usertype--</option>
              {
                usertype.map((item,index)=>(
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </select>
            <label className='form-label'><b>Emailid:</b></label>
            <input className='form-control' type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
            <label className='form-label'><b>Password:</b></label>
            <input type="password"  className='form-control'  value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
           <button className='btn btn-warning w-full' ><b>Submit</b></button>
          </Card.Body>
        </Card>
      );
    }
    


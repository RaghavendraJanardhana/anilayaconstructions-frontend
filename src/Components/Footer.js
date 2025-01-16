import React from 'react'
import { Card } from 'react-bootstrap';
import {FaCheckCircle, FaMoneyBillWave, FaPaintRoller, FaFileAlt, FaHardHat, FaBuilding } from 'react-icons/fa';

export default function Footer()
 {
  return (
    <div>
      <h1 className="text-center" style={{fontFamily:"Roboto, serif"}}>Why Choose Nilaya </h1>
<h1  className="text-center" style={{color:'orange',fontFamily:"Roboto, serif"}}>Builders</h1><br></br><br></br><br></br>

<div className='flex icon1' style={{fontFamily:"Roboto, serif"}}>
<div className='icon-box' style={{marginLeft:"100px"
}}>
  <FaCheckCircle  size={30} color="black" /><br></br>
  <h5>Quality truly delivered</h5>
  </div>
  <div className='icon-box' style={{marginLeft:"300px"}}>
  <FaMoneyBillWave    size={30} color="black" /><br></br>
  <h5>Legit payment process</h5>
  </div>
  <div className='icon-box' style={{marginLeft:"300px"}}>
  <FaPaintRoller   size={30} color="black" /><br></br>
  <h5>Post-sale services</h5>
  </div> 
</div><br></br><br></br><br></br><br></br>

<div className='flex icon2' style={{fontFamily:"Roboto, serif"}}>
<div className='icon-box' style={{marginLeft:"80px"}}>
  <FaBuilding  size={30} color="black" /><br></br>
  <h5>Ethical i.e., harassment free</h5>
  </div>
  <div className='icon-box' style={{marginLeft:"290px"}}>
  <FaFileAlt   size={30} color="black" /><br></br>
  <h5>Clarity of work-flow</h5>
  </div>
  <div className='icon-box' style={{marginLeft:"290px"}}>
  <FaHardHat   size={30} color="black" /><br></br>
  <h5>Team of actual experts</h5>
  </div> 
</div><br></br><br></br><br></br><br></br>


<div>
  <img  src="https://t4.ftcdn.net/jpg/09/23/12/47/360_F_923124779_maah7DQGmzRUwkY1Ma4VUmZghxpf6G8J.jpg" width="100%"/>


    <Card className='footercard'  style={{background:"black",color:"white",height:"760px"}}>
      <Card.Body>
        <Card.Title><h2 style={{textAlign:"center"}}>Nilaya Builders</h2></Card.Title><br></br>
        <Card.Text>
        <p style={{marginLeft:"300px"}}>USEFUL LINKS
        <ul  style={{ listStyleType: "disc", marginLeft: "2px" }}>
          <li><a className='footerlinks' href="/Aboutus">About us</a></li>
          <li><a className='footerlinks' href="/Careers" >Careers</a></li>
          <li><a className='footerlinks' href="/Contact" >Contact Us</a></li>
          </ul>
          </p>
        </Card.Text>
        <Card.Text style={{marginLeft:"900px",marginTop:"-120px"}}>
        <p>Address : #xxx, 6th Main Rd, <br></br>Vijay Nagar 2nd Stage, <br></br>Vijayanagar, Mysuru, <br></br>Karnataka 570017<br></br>
        Phone : 096069 66266<br></br>
        Email : eo@nilaya.in</p>
        </Card.Text>
      </Card.Body>
    </Card>

</div><br></br>


<p style={{textAlign:"center"}}>Nilaya Builders – Copyright 2022. Developed by Qurativity Media Solutions Private Limited</p>
    </div>
  )
}

import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Navigation = () => {
    return (
     
     
      <Nav className='container fluid bg-light'>
          <ul className='d-flex justify-content-between'>
            <Link to='/'>
            <li  className='ml-3'>
            Home
            </li >
            </Link>
            <Link to='/countries'>
            <li className='ml-3'>
             Countries
            </li>
            
            </Link>
           {/*  <Link to='/info'> 
            <li  className='ml-3'>
            info
            </li>
            </Link> */}
           
          </ul>
        </Nav>
      

    
    )
}
export default Navigation
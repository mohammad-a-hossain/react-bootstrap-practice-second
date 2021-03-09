import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
 const Country = (props) => {
     //console.log(props.contry)
   const {name} =props.country
    return (
     
        <Card style={{ width: '18rem' }} className='m-1'>
    
        <Card.Body>
        <Card.Title>{name}</Card.Title>
          <Card.Text>
          <>capital</>
        </Card.Text>
        <Link to={`/info/${name}`}>Show details</Link>
       
     
      </Card.Body>
      </Card>
 
    )
}
export default Country
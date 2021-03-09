import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Friend = (props) => {
    const {name,email,username,website,id} =props.friend
    return (
        
        <Card style={{ width: '18rem' }} className='m-1'>
       
         <Card.Body>
         <Card.Title>{name}</Card.Title>
          <Card.Text>
          <>email:{email}</>
          <>user name:{username}</>
          <>website:{website}</>
           <>id-{id}</>
         </Card.Text>
         <Link to={`/users/${id}`}><Button variant="primary"> click</Button></Link>

       </Card.Body>
       </Card>
       
       
    )
}
export default Friend
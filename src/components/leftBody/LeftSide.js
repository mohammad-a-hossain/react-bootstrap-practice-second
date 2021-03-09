import React from 'react'

import {useEffect,useState} from 'react'
import Friend from '../friend/Friend'

const LeftSide = () => {
      
    const [friends,setFriend]  = useState([])

     useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.json())
         .then(data =>setFriend(data))
           console.log(friends)
     },[friends])
    return (
        <div className='container d-flex row p-2'>
         {
            friends.map(friend =><Friend friend={friend}></Friend>)
         }
       
         </div>
    )
}
export  default LeftSide
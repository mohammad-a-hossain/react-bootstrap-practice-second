import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

 const User = () => {
       // const userId =props.userId
        const {userId} =useParams()
        //console.log(userId)
        const [user,setUser] = useState({})
       
      useEffect(() => {
         const url=(`https://jsonplaceholder.typicode.com/users/${userId}`)
         fetch(url)
         .then(res => res.json())
         .then(data =>setUser(data))

      },[]) 
          // console.log(user)
           const {email,username,website,id} =user
      
    return (
        <div>
            <h1>user page details here  ({userId})</h1>
            <p>email:{email}</p>
          <p>user name:{username}</p>
          <p>website:{website}</p>
           <p>id-{id}</p>
           <p>address:city-{user?.address?.city}</p>
           <p>address:zi-{user?.address?.zipcode}</p>
           <p>geo latitude:{user?.address?.geo?.lat}-longitude:{user?.address?.geo?.lng}</p>  
        </div>
    )
}
export default User
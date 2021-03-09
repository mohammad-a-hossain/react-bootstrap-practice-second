import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

 const Info = () => {
     const {name}= useParams()
     const [country,setCountry] = useState({})
     useEffect(()=>{
           const url=(`https://restcountries.eu/rest/v2/name/${name}`)
              console.log(url)
           fetch(url)
           .then(res => res.json())
           .then(data =>setCountry(data[0]))
     },[])
     console.log(country)
/* 
     const {capital,region,population,flag}= country */
     //const {name,email,username,website,id} =user
    return (
        <div>
            <h1>info page {name}</h1>
            <img src={country.flag}></img>
            <p> name:{country.name} </p>
            <p>capital: {country.capital} </p>
            <p>ragion: {country.region} </p>
            <p>population: {country.population} </p>
            {/* <p>address:zi-{user?.address?.zipcode}</p> */}
            <p>currencies -{country?.currencies?.[0].name}</p>
        </div>
    )
}
export default Info
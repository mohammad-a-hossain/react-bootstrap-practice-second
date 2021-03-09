import React from 'react'
import {useEffect,useState} from 'react'

import Country from '../country/Country'


   
      
 const Countries = () => {
         const [countries,setCountries] =useState([])
     useEffect(()=>{
         fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(data => setCountries(data))
     },[countries])
    return (
        <div className='container row col-lg-12 justify-content-center fluid bg-primary'>
        {
            countries.map(country =><Country country={country} ></Country>)
          
        }
       
        </div>
    )
}
export default Countries
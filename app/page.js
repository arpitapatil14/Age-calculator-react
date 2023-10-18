"use client"
import React, { useState } from 'react'

const page = () => {
  const [birthdate, setBirthdate] = useState('')
  const [age, setAge] = useState(0)
  const calculateAge = () => {
    const birthDate = new Date(birthdate)
    const currentDate = new Date()

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() <  birthDate.getDate()))
    {
      age--;


    }
    setAge(age);




  }
  return (
    <>
    <center>
    <div   >
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input type='date' value={birthdate} onChange={(e) => {
          setBirthdate(e.target.value)
        }}
        />
        <button className='p-5' onClick={calculateAge}
        >Calculate Age</button>
        <h2>You are {age} years old</h2>
      </div>
    </center>
  
    </>

  )
}

export default page
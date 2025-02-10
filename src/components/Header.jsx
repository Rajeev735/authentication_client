import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

function Header() {
    const {userData} = useContext(AppContext)
  return (
    <div>
        <h1 className='flex flex-col items-center mt-20 px-4 text-center text-gray=800'>Hey {userData ? userData.name:'Developer'}! </h1>

        <h2 className='flex flex-col items-center mt-20 px-4 text-center text-gray=800'>Welcome to ishisoft</h2>
    </div>
  )
}

export default Header
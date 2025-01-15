import { ListFilter } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=''>
        <div className=' px-5 shadow-lg rounded flex'>
        <ListFilter className='size-30 text-blue-600'/>
            <h1 className='text-xl font-semibold text-blue-500 mb-3'> sincronía</h1>
        </div>
    </div>
  )
}

export default Header
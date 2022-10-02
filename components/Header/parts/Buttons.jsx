import React from 'react'

const Buttons = () => {
  return (
    <div className='flex gap-8'>
        <button>Sign in</button>
        <button className='bg-red-500 px-4 py-2 rounded font-medium'>Subscribe</button>
    </div>
  )
}

export default Buttons
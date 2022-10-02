import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={`/`}>
        <a className='flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 translate-y-[75px] scale-150'>
            <p className='text-9xl bigA text-red-500 bg-white dark:bg-surface w-[120px] flex justify-center italic'>A</p>
            <p className='text-2xl italic -translate-y-6 atlantic'>The Atlantic</p>
        </a>
    </Link>
  )
}

export default Logo
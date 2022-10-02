import React from 'react'
import Buttons from './parts/Buttons'
import Links from './parts/Links'
import Logo from './parts/Logo'
import Menu from './parts/Menu'
import Search from './parts/Search'

const Header = () => {
  return (
    <header className='border-b dark:border-neutral-500'>
      <div className="max-w-7xl mx-auto flex gap-8 items-center py-10 relative">
        <Menu />
        <Search />
        <Links />
        <Logo />
        <Buttons />
      </div>
    </header>
  )
}

export default Header
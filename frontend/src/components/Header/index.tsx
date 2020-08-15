import React from 'react'
import Logo from '../Logo'
import './index.scss'

export type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => (
  <header className={className}>
    <Logo className="logo-container" />
    <h1>
      my.belonings
    </h1>
  </header>
)

export default Header
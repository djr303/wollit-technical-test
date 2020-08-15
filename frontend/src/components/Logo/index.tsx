import React from 'react'
import './index.scss'

export type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <div className={`logo ${className}`}></div>
)

export default Logo
import React from 'react'
import './index.scss'

export type FooterProps = {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={className}>
    Wollit technical test | Written by David Roberts |&nbsp;
    <a href="mailto:david.j.roberts303@gmail.com">david.j.roberts303@gmail.com</a>
  </footer>
)

export default Footer
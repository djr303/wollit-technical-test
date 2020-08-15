import React from 'react'
import Logo from '../Logo'
import './index.scss'

export type LoadingProps = {
  onComplete: () => void
  wait: number
}

const Loading: React.FC<LoadingProps> = ({ onComplete, wait }) => (
  <div
    className="loading">
    <h1>
      <Logo className="logo-container" />
      <span className="text-my">my</span>
      <span className="text-dot">.</span>
      <span onAnimationEnd={() => setTimeout(() => onComplete(), wait) } className="text-belongings">belongings</span>
    </h1>
  </div>
)


export default Loading
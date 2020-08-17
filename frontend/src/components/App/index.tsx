import React from 'react'
import { Category } from '../../types'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import './index.scss'

export type AppProps = {
  categories: Category[]
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="app">
      <Header className="header" />
      <Main { ...props } className="main" />
      <Footer className="footer" />
    </div>
  )
}

export default App
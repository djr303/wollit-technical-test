import React from 'react'
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css'
import './index.scss'

export type MainProps = {
  className?: string
}

const Main: React.FC<MainProps> = ({ className }) => (
  <main className={className}>
    <ReflexContainer orientation="vertical">

      <ReflexElement className="tree-view-container">
      </ReflexElement>

      <ReflexSplitter/>

      <ReflexElement className="editor-container">
      </ReflexElement>

    </ReflexContainer>
  </main>
)

export default Main
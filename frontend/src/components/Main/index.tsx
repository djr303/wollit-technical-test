import React, { useCallback, useState, useContext } from 'react'
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css'
import './index.scss'
import TreeView from '../TreeView'
import { Category } from '../../types'
import { useApolloClient, useLazyQuery } from 'react-apollo';
import { gql } from "apollo-boost";
import machineContext from '../../contexts/machineContext'

export type MainProps = {
  className?: string
  categories: Category[]
}


const Main: React.FC<MainProps> = ({ className, categories }) => {
  const [_, send] = useContext(machineContext)

  const onExpandTree = useCallback((e: any, value: any, maxDepth) => {
    send('REFRESH', { maxTreeDepth: maxDepth })
  },[])
  
  return (
    <main className={className}>
      <ReflexContainer orientation="vertical">

        <ReflexElement className="tree-view-container">
          <TreeView categories={categories} onExpandTree={onExpandTree} /> 
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement className="editor-container">
        </ReflexElement>

      </ReflexContainer>
    </main>
  )
}

export default Main
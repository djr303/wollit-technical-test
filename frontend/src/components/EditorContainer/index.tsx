import React from 'react'
import './index.scss'
import Editor from '../Editor'

const EditorContainer: React.FC = () => {
  
  return (
    <div className="editor">
      <div className="category-editor">
        <Editor />
      </div>
      <div className="item-editor">
        <Editor />
      </div>
    </div>
  )
}

export default EditorContainer
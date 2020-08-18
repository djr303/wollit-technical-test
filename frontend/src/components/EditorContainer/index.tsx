import React from 'react'
import './index.scss'
import Editor from '../Editor'

const EditorContainer: React.FC = () => {
  
  return (
    <div className="editor-container">
      <div className="item-editor">
        <Editor
          title="Add item"
          textInputLabel="Item name"
          selectInputLabel="Parent category"
          buttonText="Add"
        />
      </div>
      <div className="category-editor">
        <Editor
          title="Add category"
          textInputLabel="Category name"
          selectInputLabel="Parent category"
          buttonText="Add"
        />
      </div>
    </div>
  )
}

export default EditorContainer
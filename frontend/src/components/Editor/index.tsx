import React from 'react'
import TextInput from '../TextInput'
import SelectInput from '../SelectInput'
import Button from '../Button'
import './index.scss'


export type EditorProps = {
  title: string
  textInputLabel: string
  buttonText: string
  selectInputLabel: string
}

const Editor: React.FC<EditorProps> = ({ 
  textInputLabel, 
  buttonText,
  title,
  selectInputLabel
  }) => {

  return (
    <div className="editor">
      <h2>{title}</h2>
      <div className="text-input-container">
        <TextInput label={textInputLabel} />
      </div>
      <div className="select-input-container">
        <SelectInput label={selectInputLabel} />
      </div>
      <div className="button-conatiner">
        <Button>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default Editor
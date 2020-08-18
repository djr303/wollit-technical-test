import React from 'react'
import TextInput from '../TextInput'
import SelectInput from '../SelectInput'
import Button from '../Button'

const Editor: React.FC = () => {

  return (
    <div className="editor">
      <TextInput />
      <SelectInput />
      <Button />
    </div>
  )
}

export default Editor
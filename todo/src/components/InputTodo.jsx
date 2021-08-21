import React from 'react'

export const InputTodo = (props) => {

  const { value, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={ value } onChange={ onChange } />
      <button onClick={ onClick }>追加</button>
    </div>
  )
}

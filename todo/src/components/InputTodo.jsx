import React from 'react'

const style = {
  backgroundColor: "#c1e4ff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
}

export const InputTodo = (props) => {

  const { value, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input disabled={ disabled } placeholder="TODOを入力" value={ value } onChange={ onChange } />
      <button disabled={ disabled } onClick={ onClick }>追加</button>
    </div>
  )
}

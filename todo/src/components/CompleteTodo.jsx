import React from 'react'

const style = {
  backgroundColor: "#fcfcc3",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
}

export const CompleteTodo = (props) => {

  const { todo, onClickBack } = props;

  return (
    <div style={style}>
      <p className="title">完了したTODO</p>
      <ul>
        {
          todo.map((todo, index) => {
            return (
              <li key={ index }>
                <div className="list-row">
                  <p>{ todo }</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

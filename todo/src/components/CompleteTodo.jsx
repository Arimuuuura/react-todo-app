import React from 'react'

export const CompleteTodo = (props) => {

  const { todo, onClickBack } = props;

  return (
    <div className="complete-area">
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

import React, { useState } from 'react';

export const App = () => {

  const [ incompleteTodos, setIncompleteTodos ] = useState(["例) 食事"]);
  const [ completeTodos, setCompleteTodos ] = useState(["例) 運動"]);
  const [ inputText, setInputText ] = useState('');

  // 入力された値を取得
  const onChangeInputText = (event) => setInputText(event.target.value);

  // 追加ボタンを押されたときのイベント
  const onClickAdd = () => {
    if (inputText === '') return;
    const newTodo = [ ...incompleteTodos, inputText ];
    setIncompleteTodos(newTodo);
    setInputText('');
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={ inputText } onChange={ onChangeInputText } />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {
            incompleteTodos.map((todo) => {
              return (
                <li key={ todo }>
                  <div className="list-row">
                    <p>{ todo }</p>
                    <button>完了</button>
                    <button>削除</button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {
            completeTodos.map((todo) => {
              return (
                <li key={ todo }>
                  <div className="list-row">
                    <p>{ todo }</p>
                    <button>戻す</button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

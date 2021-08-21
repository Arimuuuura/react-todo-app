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

  // 削除ボタンを押したときのイベント
  const onClickDelete = (index) => {
    if (index === 0) return;
    const deleteTodo = [ ...incompleteTodos ];
    // splice(削除したい順番, 削除したい数)
    deleteTodo.splice(index, 1);
    setIncompleteTodos(deleteTodo);
  }

  // 完了ボタンを押したときのイベント
  const onClickComplete = (index) => {
    if (index === 0) return;
    // 未完了リストから削除
    const inCompleteTodo = [ ...incompleteTodos ];
    inCompleteTodo.splice(index, 1);
    // 完了リストへ追加
    const completeTodo = [ ...completeTodos, incompleteTodos[index] ];
    // それぞれの state を更新
    setIncompleteTodos(inCompleteTodo);
    setCompleteTodos(completeTodo);
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
            incompleteTodos.map((todo, index) => {
              return (
                <li key={ index }>
                  <div className="list-row">
                    <p>{ todo }</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
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

import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';

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
    const newCompleteTodo = [ ...completeTodos, incompleteTodos[index] ];
    // それぞれの state を更新
    setIncompleteTodos(inCompleteTodo);
    setCompleteTodos(newCompleteTodo);
  }

  // 戻すボタンを押したときのイベント
  const onClickBack = (index) => {
    if (index === 0) return;
    // 完了済みから削除
    const backTodo = [ ...completeTodos ];
    backTodo.splice(index, 1);
    // 未完了リストへ追加
    const newInCompleteTodo = [ ...incompleteTodos, completeTodos[index] ];
    // それぞれの state を更新
    setCompleteTodos(backTodo);
    setIncompleteTodos(newInCompleteTodo);
  }

  return (
    <>
      <InputTodo value={ inputText } onChange={ onChangeInputText } onClick={ onClickAdd } />
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
            completeTodos.map((todo, index) => {
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
    </>
  );
}

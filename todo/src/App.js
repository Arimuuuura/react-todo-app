import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { InCompleteTodos } from './components/InCompleteTodos';
import { CompleteTodo } from './components/CompleteTodo';

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
      <InputTodo value={ inputText } onChange={ onChangeInputText } onClick={ onClickAdd } disabled={ incompleteTodos.length > 5 } />
      {
        incompleteTodos.length > 5 && <p style={{ color: "red" }}>登録できるのは５個までです</p>
      }
      <InCompleteTodos todo={ incompleteTodos } onClickComplete={ onClickComplete } onClickDelete={ onClickDelete } />
      <CompleteTodo todo={ completeTodos } onClickBack={ onClickBack } />
    </>
  );
}

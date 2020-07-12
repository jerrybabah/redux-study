import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {
        todos.map((todo, index) => {
          return (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} /> // property를 지정할 때, 객체의 spread 문법을 사용해도 됨
            // <Todo key={index} completed={todo.completed} text={todo.text} onClick={() => onTodoClick(index)} />
          );
        })
      }
    </ul>
  );
}
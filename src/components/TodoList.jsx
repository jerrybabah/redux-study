import React from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';
import { completeTodo } from '../actions';

let TodoList = ({ todos, onTodoClick }) => {
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

function getVisibleTodos(todos, filter) {
  if (filter === 'SHOW_ALL') {
    return todos;
  }

  if (filter === 'SHOW_COMPLETED') {
    return todos.filter((todo) => todo.completed);
  }

  if (filter === 'SHOW_ACTIVE') {
    return todos.filter((todo) => !todo.completed);
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(completeTodo(id));
    },
  };
}

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;


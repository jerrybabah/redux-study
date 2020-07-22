import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Todo from './Todo';
import { RootState } from '../store';
import { completeTodo } from '../store/todo/action';

const mapStateToProps = (state: RootState) => {
  if (state.visibilityFilter === 'SHOW_ALL') {
    return {
      todos: state.todos,
    }
  } else if (state.visibilityFilter === 'SHOW_ACTIVE') {
    return {
      todos: state.todos.filter((todo) => !todo.completed),
    }
  } else {
    return {
      todos: state.todos.filter((todo) => todo.completed)
    }
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTodoClick: (index: number) => {
      dispatch(completeTodo(index));
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type TodoListProps = ConnectedProps<typeof connector>;

const TodoList = ({ todos, onTodoClick }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
        );
      })}
    </ul>
  );
};

export default connector(TodoList);
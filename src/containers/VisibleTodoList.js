import { connect } from 'react-redux'
import { completeTodo } from '../actions';
import TodoList from '../components/TodoList'

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

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
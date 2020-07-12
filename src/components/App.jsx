import React from 'react';
import Footer from './Footer';
// import AddTodo from '../containers/AddTodo';
import AddTodo from '../components/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';
import TodoList from '../components/TodoList';

export default function App() {
  return (
    <div>
      <AddTodo />
      {/* <VisibleTodoList /> */}
      <TodoList />
      <Footer />
    </div>
  );
}
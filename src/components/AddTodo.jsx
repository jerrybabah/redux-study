import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ onSubmit }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        onSubmit(input.value);
        input.value = '';
      }}>
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text));
    }
  }
}

AddTodo = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodo;

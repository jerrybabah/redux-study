import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo } from '../store/todo/action';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTodo(text));
    },
  }
}

const connector = connect(null, mapDispatchToProps);

type AddTodoProps = ConnectedProps<typeof connector>;

const AddTodo: React.FC<AddTodoProps> = ({ onSubmit }) => {
  let input: HTMLInputElement | null;

  return (
    <form onSubmit={(e) => {
        e.preventDefault();

        if (input === null || !input.value.trim) {
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
      <button type={'submit'}>Add Todo</button>
    </form>
  );
}

export default connector(AddTodo);
import React from 'react';

export interface IAddTodoProps {
  onSubmit: () => void;
}

const AddTodo = ({ onSubmit }: IAddTodoProps) => {
  let input: HTMLInputElement | null;

  return (
    <form onSubmit={(e) => {
        e.preventDefault();

        if (input === null || !input.value.trim) {
          return;
        }

        onSubmit();
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

// TODO: redux;

export default AddTodo;
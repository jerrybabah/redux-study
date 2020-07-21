import React from 'react';

export interface ITodoProps {
  onClick: (e: React.MouseEvent) => void;
  completed: boolean;
  text: string;
}

const Todo = ({ onClick, completed, text }: ITodoProps) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed? 'line-through': 'none',
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
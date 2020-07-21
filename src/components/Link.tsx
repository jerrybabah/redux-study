import React from 'react';

export interface ILinkProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const Link = ({ onClick, active, children }: ILinkProps) => {
  if (active) {
    return (
      <span>{children}</span>
    );
  }

  return (
    <a
      href={'#/'}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

export default Link;
import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

let Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href='#/'
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
}

Link = connect(mapStateToProps, mapDispatchToProps)(Link);

export default Link;
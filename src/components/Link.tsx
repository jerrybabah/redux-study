import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store';
import { FilterType } from '../store/visibilityFilter/type';
import { setVisibilityFilter } from '../store/visibilityFilter/action';

export interface LinkContainerProps {
  filter: FilterType;
}

const mapStateToProps = (state: RootState, ownProps: LinkContainerProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LinkContainerProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type LinkProps = ConnectedProps<typeof connector> & { children: React.ReactNode };

const Link = ({ onClick, active, children }: LinkProps) => {
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

export default connector(Link);
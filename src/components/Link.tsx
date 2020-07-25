import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store';
import { FilterType } from '../store/visibilityFilter/type';
import { setVisibilityFilter } from '../store/visibilityFilter/action';

export interface LinkContainerProps {
  filter: FilterType;
  children: React.ReactNode; // React.FC 처럼 children을 자동으로 처리해주는 방법이 없어 보인다. container component가 children을 전달 받는다면 명시적으로 적어주자.
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

type LinkProps = ConnectedProps<typeof connector>;

const Link: React.FC<LinkProps> = ({ onClick, active, children }) => {
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
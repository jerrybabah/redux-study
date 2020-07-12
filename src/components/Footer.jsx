import React from 'react';
// import FilterLink from '../containers/FilterLink';
import Link from '../components/Link';

export default function Footer() {
  return (
    <p>
      Show: <Link filter="SHOW_ALL">All</Link>
      {', '}
      <Link filter="SHOW_ACTIVE">Active</Link>
      {', '}
      <Link filter="SHOW_COMPLETED">Completed</Link>
    </p>
  );
}
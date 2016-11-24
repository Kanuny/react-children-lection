import React, { Component, PropTypes } from 'react';

export default function Tab(props) {
  return (
    <div className={!props.active ? 'hidden' : ''}>
      {props.children}
    </div>
  );

}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
}

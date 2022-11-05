import React = require('react');

function Child(props) {
  props.name = 'al-bur';
  // name = 'al-bur';

  return <div>{props.name}</div>;
}

export default Child;

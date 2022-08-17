import React from 'react';

function Header(props) {
  let title = '';
  let style = {};
  if (props.isToggled) {
    title = 'Horned Beasts'
    style = { backgroundColor: 'orange'};
  } else {
    title = 'Animals with Horns';
    style = {
      color: 'white',
      backgroundColor: 'darkblue'
    };
  }
  return (
    <header onClick={props.handleClick}>
      <h1 style={style}>{title}</h1>
    </header>
  );
}

export default Header;

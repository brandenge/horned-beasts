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
    <header>
      <label>
        Search:
        <input type="search"/>
      </label>
      <h1 onClick={props.handleClick} style={style}>{title}</h1>
    </header>
  );
}

export default Header;

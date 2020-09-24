import React, { useState } from 'react';
import colors from '../config/colors';

export default function Button({ text }) {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const buttonClick = click ? colors.white : colors.danger;
  const textClick = click ? colors.primary : colors.white;

  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 200);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{
          backgroundColor: hover ? buttonClick : colors.secondary,
          color: hover ? textClick : colors.danger,
        },
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      {text}
    </div>
  );
}

const styles = {
  container: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    fontSize: 16,
    fontWeight: 600,
    color: colors.danger,
    cursor: 'pointer',
  },
};

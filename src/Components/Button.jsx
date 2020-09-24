import React, { useState } from 'react';
import colors from '../config/colors';

export default function Button({ text }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.container,
        ...{
          backgroundColor: hover ? colors.danger : colors.secondary,
          color: hover ? colors.secondary : colors.danger,
        },
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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

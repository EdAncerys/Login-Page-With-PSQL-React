import React from 'react';

export default function SignupBanner({ props }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
  };

  const myChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>Enter Your Name Below</div>
        <label>
          Name{' '}
          <input type="text" placeholder="banana" onChange={myChangeHandler} />
        </label>
        <input type="submit" value="Enter Submit" />
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    rowGap: 20,
  },
};

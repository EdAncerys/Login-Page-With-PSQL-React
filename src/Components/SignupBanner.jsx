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
        <div>Please enter your account details below</div>
        <label>
          Email{' '}
          <input
            type="text"
            placeholder="Account email"
            onChange={myChangeHandler}
          />
        </label>
        <label>
          Password{' '}
          <input
            type="text"
            placeholder="Password"
            onChange={myChangeHandler}
          />
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

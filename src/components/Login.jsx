import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css'; // Import the CSS file

const Login = () => {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor='username'>Username:</label>
        <input
          type="text"
          id="username"
          placeholder='Enter username here'
          {...register("username", {
            required: {
              value: true,
              message: "Username is required"
            },
            minLength: {
              value: 5,
              message: "Username must contain at least 5 characters"
            }
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor='password'>Password:</label>
        <input
          type="password"
          id="password"
          placeholder='Enter password here'
          {...register("password", {
            required: {
              value: true,
              message: "Password is necessary"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              message: "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>Reset</button>

        <div className="signup-link">
          <p>Not registered? <a href="/signup">Click here to sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;

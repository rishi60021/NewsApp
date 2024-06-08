import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css'; 

const Signup = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor='email'>Email:</label>
        <input
          type="email"
          id="email"
          placeholder='Enter email here'
          {...register("email", {
            required: {
              value: true,
              message: "email is required"
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;

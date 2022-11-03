import * as React from 'react';
import './style.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  id: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('id')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('id', { required: true })} />
      {errors.id && <span>id is required</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('password', { required: true })} />
      {errors.password && <span>password is required</span>}

      {/* errors will return when field validation fails  */}

      <input type="submit" />
    </form>
  );
}

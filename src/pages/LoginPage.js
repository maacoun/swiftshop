import { useForm } from 'react-hook-form';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="email" />
      {errors.email && <span>Email is required</span>}

      <input {...register('password')} type="password" />
      {errors.password && <span>Password is required</span>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;

import { useForm } from 'react-hook-form';

function RegisterPage() {
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

      <input {...register('confirmPassword')} type="password" />
      {errors.confirmPassword && <span>Confirm Password is required</span>}

      <input {...register('address')} type="text" />
      {errors.address && <span>Address is required</span>}

      <input {...register('phoneNumber')} type="text" />
      {errors.phoneNumber && <span>Phone Number is required</span>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;

import { useForm } from "react-hook-form";

export const REGISTRATION = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="registration_wrapper">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("first_name", { required: true })}
          type="text"
          placeholder="First Name"
        />
        {errors?.first_name ? <p className="error">This input is required</p> :''}
        <input
          {...register("last_name", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        {errors?.last_name ? <p className="error">This input is required</p> :''}
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="title"
        />
        {errors?.title ? <p>This input is required</p> :''}
        <input {...register("date_of_birth", { required: true })} type="date" />
        {errors?.date_of_birth ? <p className="error">This input is required</p> :''}
        <select {...register("gender", { required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors?.gender ? <p className="error">This input is required</p> :''}
        <input
          {...register("work_phone", { required: true })}
          type="tel"
          placeholder="+263 775 786 980"
        />
        {errors?.work_phone ? <p className="error">This input is required</p> :''}
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="tinoe@gmail.com"
        />
        {errors?.email ? <p className="error">This input is required</p> :''}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

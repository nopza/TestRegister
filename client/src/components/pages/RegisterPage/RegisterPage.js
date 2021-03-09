import React from "react";
import { useDispatch } from "react-redux";
import * as registerAction from "../../../actions/register.action";
import { useForm } from "react-hook-form";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(registerAction.register(data, props.history));
    console.log(data);
  };

  const handleCancel = () => {
    window.location.assign("/");
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="username" ref={register({ required: true })} />
        {errors.password && <span>This field is required</span>}
        <input
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <button className="btn btn-primary">Submit</button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

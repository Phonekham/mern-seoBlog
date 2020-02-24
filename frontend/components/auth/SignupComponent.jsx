import { useState } from "react";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = e => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
  };

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
          ></input>
          <input
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
          ></input>
          <input
            onChange={handleChange("password")}
            type="password]"
            className="form-control"
            placeholder="Password"
            value={password}
          ></input>
        </div>
        <div>
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    );
  };

  return <React.Fragment>{signupForm()}</React.Fragment>;
};

export default SignupComponent;

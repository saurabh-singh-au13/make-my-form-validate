import React, { useState, useEffect } from "react";

import "./Body.css";

const Body = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.userName) {
      errors.userName = "User Name is required";
    }

    if (!values.email) {
      errors.email = "User Email is required";
    }

    if (!values.password) {
      errors.password = "User password is required";
    }
    return errors;
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui success">Login Success</div>
      ) : (
        <>
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          <div className="container">
            <div className="body-container-left">
              <ul>
                <li>User Name</li>

                <li>Email</li>

                <li>Password</li>
              </ul>
            </div>
            <div className="body-container-right">
              <ul>
                <li>
                  <input
                    name="userName"
                    placeholder="Enter User Name..."
                    value={formValues.userName}
                    onChange={handleChange}
                  />
                  <span>
                    {" "}
                    <p>{formErrors.userName}</p>
                  </span>
                </li>

                <li>
                  <input
                    name="email"
                    placeholder="Enter Email..."
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <span>
                    {" "}
                    <p>{formErrors.email}</p>
                  </span>
                </li>

                <li>
                  <input
                    name="password"
                    placeholder="Enter Password..."
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <span>
                    {" "}
                    <p>{formErrors.password}</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
    </>
  );
};

export default Body;

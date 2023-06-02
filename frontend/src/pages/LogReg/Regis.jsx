import React, { useState } from "react";
import { Formik, Form } from "formik";
import AccordInput from "../../components/Input/input";
import AccordGoogle from "./accordGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Regis() {
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePassword() {
    setShowPassword(!showPassword);
  }

  function handleRegis(values) {
    console.log("Username:", values.username);
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    console.log("Confirm Password:", values.confirmPassword);
  }

  return (
    <div className="w-screen h-screen bg-imageF brightness-30">
      <div className="container pt-5 md:pt-3 px-20 md:px-8">
        <section className="flex items-center md:justify-center">
          <img className="w-28 h-28" src="./assets/logo.png" alt="" />
          <p className="text-white text-4xl">
            MUSIVO{" "}
            <span>
              <p className="text-sm">Let’s Play The Music</p>
            </span>
          </p>
        </section>
        <section className=" md:mt-8">
          <div className="flex items-center">
            <div className="max-w-md w-full space-y-8">
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = "Username is required";
                  }
                  if (!values.email) {
                    errors.email = "Email is required";
                  }
                  if (!values.password) {
                    errors.password = "Password is required";
                  }
                  else if (values.password.length <= 8) {
                    errors.password = "Password must be at least 8 characters long";
                  }

                  if (!values.confirmPassword) {
                    errors.confirmPassword = "Confirm Password is required";
                  } else if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = "Passwords do not match";
                  }
                  else if (values.confirmPassword.length <= 8) {
                    errors.confirmPassword = "Password must be at least 8 characters long"
                  }

                  return errors;
                }}
                onSubmit={handleRegis}
              >
                {() => (
                  <Form className=" space-y-3">
                    <input type="hidden" name="remember" value="true" />
                    <AccordInput
                      type="text"
                      name="username"
                      placeholder="Username"
                      text="Username"
                    />

                    <AccordInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      text="Email"
                    />
                    <AccordInput
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      text="Password"
                      showPassword={showPassword}
                      togglePassword={handleTogglePassword}
                    />


                    <AccordInput
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      text="Confirm Password"
                    />
                    <button type="button" onClick={handleTogglePassword}>
                      {showPassword ? ( 
                        <FontAwesomeIcon icon={faEyeSlash} /> 
                      ) : (
                        <FontAwesomeIcon icon={faEye} />
                      )}
                    </button>
                    <div className="mt-2">
                      <button
                        type="submit"
                        className="py-2 group relative w-full flex justify-center px-4 border border-white text-sm font-medium rounded-md text-white hover:border-indigo-600 md:h-11 md:px-1"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        Register
                      </button>
                      <div className="mt-2">
                        <h3 className="text-white text-md text-center py-4">
                          Or
                        </h3>
                      </div>
                      <AccordGoogle />
                      <h2 className="text-white text-sm px-4 py-3 text-center">
                        have an account ?{" "}
                        <span className="text-red-700 inline-block">
                          Sign In Now
                        </span>
                      </h2>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Formik, Form } from "formik";
import AccordInput from "../../components/Input/input";
import AccordGoogle from "./accordGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleTogglePassword() {
    setShowPassword(!showPassword)
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
  }

  return (
    <div className="bg-image md:bg-image-md image-md bg-no-repeat bg-center bg-cover w-screen h-screen filter-brightness-1">
      <div className="container pt-5 px-20 md:px-8" style={{ zIndex: "11px" }}>
        <section className="flex items-center md:justify-center">
          <img className="w-28 h-28" src="./assets/logo.png" alt="" />
          <p className="text-white text-4xl">
            MUSIVO{" "}
            <span>
              <p className="text-sm">Let’s Play The Music</p>
            </span>
          </p>
        </section>
        <section className="mt-8">
          <div className="flex items-center">
            <div className="max-w-md w-full space-y-8">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Email is required";
                  }
                  if (!values.password) {
                    errors.password = "Password is required";
                  }
                  return errors;
                }}
                onSubmit={handleLogin}
              >
                <Form className="space-y-4">
                  <input type="hidden" name="remember" value="true" />
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
                    <button type="button" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
                  <div className="forgot">
                    <p>Forgot Password?</p>
                  </div>
                  <div className="pt-12">
                    <button
                      type="submit"
                      className="py-2 group relative w-full flex justify-center px-4 border border-white text-sm font-medium rounded-md text-white hover:border-indigo-600 md:h-11 md:px-1"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                      Sign In
                    </button>
                    <div className="mt-2">
                      <h3 className="text-white text-md text-center py-4">
                        Or
                      </h3>
                      <h2 className="text-white text-sm px-4 py-3 text-center">
                        No have an account ?{" "}
                        <span className="text-red-700 inline-block">
                          Register Now
                        </span>
                      </h2>
                    </div>
                    <AccordGoogle />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

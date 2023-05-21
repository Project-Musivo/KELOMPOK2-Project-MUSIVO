import React, { useState } from "react";
import AccordInput from "./accordInput";
import AccordGoogle from "./accordGoogle";

export default function Regis() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  function handleRegis(event) {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", ConfirmPassword);
  }

  return (
    <div
      className="bg-no-repeat bg-center bg-cover w-screen h-screen filter-brightness-1"
      style={{ backgroundImage: "url(./assets/background/bg.png)" }}
    >
      <div className="container py-5 px-4 sm:px-28" style={{ zIndex: "11px" }}>
        <section className="flex items-center justify-center sm:justify-start">
          <img className="w-28 h-28" src="./assets/logo.png" alt="" />
          <p className="text-white text-4xl">
            MUSIVO{" "}
            <span>
              <p className="text-sm">Let’s Play The Music</p>
            </span>
          </p>
        </section>
        <section>
          <div className="flex items-center">
            <div className="max-w-md w-full space-y-8">
              <form className="mt-8 space-y-6" onSubmit={handleRegis}>
                <input type="hidden" name="remember" value="true" />

                <AccordInput
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Username"
                />

                <AccordInput
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                />
                <AccordInput
                type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
                <AccordInput
                type='password'
                  value={ConfirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm Password"
                />
                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-3 group relative w-full flex justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-white"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Register
                  </button>
                  <div className="mt-4">
                    <h3 className="text-white text-xl text-center">Or</h3>
                  </div>
                  <AccordGoogle />
                  <h2 className="text-white text-sm px-4 py-3 text-center">
                    have an account?{" "}
                    <span className="text-rose-700 block sm:inline">
                      Sign In Now
                    </span>
                  </h2>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

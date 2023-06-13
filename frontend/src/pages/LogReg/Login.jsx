import React, { useState } from "react";
import AccordGoogle from "./accordGoogle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    console.log("Email",email);
    console.log("Password",password);
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
              <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm-space-y-px">
                  <div className="mt-4">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none relative bg-transparent block w-full h-10 rounded-lg px-3 py-6 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-white-500 focus:border-white focus:z-10 sm:text-sm"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none relative bg-transparent block w-full h-12 rounded-lg px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-white-500 focus:border-white focus:z-10 sm:text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-white"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-3 group relative w-full flex justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-white"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Sign In
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-white text-xl text-center">Or</h3>
                </div>
                <AccordGoogle />
                <h1 className="text-white text-lg px-4 sm:px-14 text-center">
                  No have an account?{" "}
                  <span className="text-rose-700 block sm:inline">
                    Register Now
                  </span>
                </h1>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    console.log("tes");
  }
  return (
    <div>
      <div
        className="bg-no-repeat bg-center bg-cover w-screen h-screen filter-brightness-1"
        style={{ backgroundImage: "url(./assets/background/bgImgLR.png)" }}
      >
        <div className="container py-16 px-28" style={{ zIndex: "2px" }}>
          <section className="flex items-center">
            <img className="w-[120px]" src="./assets/logo.png" alt="" />
            <div>
            <p
              className="text-white text-[55px]"
              style={{ fontFamily: "Josefin sans,sans-serif" }}
            >
              Musivo
            </p>
            <p
              className="text-white text-[20px] -mt-[20px]"
              style={{ fontFamily: "Josefin sans,sans-serif" }}
            >
              Let's Play The Music!
            </p>
            </div>
          </section>
          <section>
            <div className="flex items-center">
              <div className="max-w-md w-full space-y-8">
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                  <input type="hidden" name="remember" value="true" />
                  <div className="rounded-md shadow-sm-space-y-px">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        className="appearance-none relative bg-transparent block w-full h-14 rounded-lg px-3 py-2 border border-gray-300 placeholder-gray-500 text-white  focus:outline-none focus:ring-white-500 focus:border-white focus:z-10 sm:text-sm"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <div className="text-sm flex justify-end mb-2">
                        <a
                          href="#"
                          className="font-medium hover:opacity-30 duration-[0.2s] text-white"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none relative bg-transparent block w-full h-14 rounded-lg px-3 py-2 border border-gray-300 placeholder-gray-500 text-white  focus:outline-none focus:ring-white-500 focus:border-white focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-white border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="py-3 group relative w-full flex justify-center px-4 border border-transparent text-md font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-white"
                    >
                      Sign in
                    </button>
                  </div>
                  <div>
                    <h3 className="text-white text-xl text-center opacity-50">
                      Or
                    </h3>
                  </div>
                  <div className="signGoogle mx-6">
                    <button
                      className="google-button rounded-lg flex justify-center items-center bg-white"
                      style={{ padding: "10px 100px" }}
                    >
                      <img
                        className="h-8"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
                        alt="Google"
                      />
                      <p className="text-black text-sm font-bold px-3">
                        Sign in with Google
                      </p>
                    </button>
                  </div>
                  <div>
                    <h1 className="text-white text-lg px-14 py-4">
                      No have an account?
                      <span className="ms-2 text-[#FE6B8E] cursor-pointer underline hover:opacity-60 duration-[0.2s]">
                        Register Now
                      </span>
                    </h1>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function ContainerLogReg({buttonText, onSubmit }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    console.log("tes");
  }
  return (
    <div
      className="bg-no-repeat bg-center bg-cover w-screen h-screen filter-brightness-1"
      style={{ backgroundImage: "url(/bgImgLR.png)" }}
    >
      <div className="container py-16 px-28" style={{ zIndex: "11px" }}>
        <section className="flex items-center">
          <img className="w-28 h-28" src="./logo.png" alt="" />
          <p className="text-white text-4xl">MUSIVO</p>
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
                  <div style={{ marginTop: "50px" }}>
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
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-white"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="py-4 group relative w-full flex justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-white"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    {buttonText}
                  </button>
                </div>
                <div>
                  <h3 className="text-white text-xl text-center">Or</h3>
                </div>
                <div className="signGoogle mx-6">
                  <button className="google-button rounded-lg flex justify-center items-center bg-white" style={{padding:'10px 100px'}}>
                    <img
                      className="h-8"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
                      alt="Google"
                    />
                    <p className="text-black text-sm font-bold px-3"> Sign in with Google</p>
                  </button>
                </div>
                <div>
                  <h1 className="text-white text-lg px-14 py-4">No have an account? <span className="text-rose-700"> Register Now</span></h1>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import React from "react";

export default function AccordGoogle() {
  return (
    <div>
      <div className="signGoogle mt-4 sm:mx-6">
        <button
          className="google-button rounded-lg flex justify-center items-center bg-white"
          style={{ padding: "5px 100px" }}
        >
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
            alt="Google"
          />
          <p className="text-black text-sm font-bold px-3">
            {" "}
            Sign in with Google
          </p>
        </button>
      </div>
    </div>
  );
}

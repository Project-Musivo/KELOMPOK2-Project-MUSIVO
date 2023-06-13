import React from "react";
import { useField } from "formik";

const AccordInput = ({ type, name, placeholder, text }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <label className="text-white text-sm">{text}</label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={`px-3 py-1 w-full bg-transparent rounded-md ${
            meta.touched && meta.error ? "border-red-500" : ""
          }`}
          {...field}
        />
        {meta.touched && meta.error && (
          <div className="text-red-500 text-xs">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default AccordInput;

import React from "react";
import { useField } from "formik";
import { Input } from "@material-tailwind/react";

const AccordInput = ({ type, name, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <div>
        <Input
          variant="outlined"
          label={placeholder}
          type={type}
          className={`px-3 py-1 w-full rounded-md ${
            meta.touched && meta.error ? "border-red-500" : ""
          }`}
          {...field}
          labelProps={{ className: "text-sm" }}
        />
        {meta.touched && meta.error && (
          <div className="text-red-500 text-xs">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default AccordInput;

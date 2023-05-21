import React from "react";

export default function AccordInput({ value, onChange, placeholder ,type}) {
  return (
    <div className="mt-4">
      <label htmlFor="input" className="sr-only">
        Input
      </label>
      <input
        id="input"
        name="input"
        type={type}
        autoComplete="off"
        required
        className="appearance-none relative bg-transparent block w-full h-10 rounded-lg px-3 py-6 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-white-500 focus:border-white focus:z-10 sm:text-sm sm:h-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

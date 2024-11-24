"use client";
import { useFormStatus } from "react-dom";

import { createUserAction } from "@/utils/actions";
import { useActionState } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useActionState(createUserAction, null);
  return (
    <form className={formStyle} action={formAction}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">Create User</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        defaultValue="Peter"
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        defaultValue="Smith"
        required
      />
      <SubmitButton />
    </form>
  );
};

const formStyle = "min-w-full flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text0white font-bold py-2 px-4 rounded capitalize";

export default Form;

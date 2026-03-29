"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-2 mt-2 rounded-lg font-semibold transition-all duration-200 shadow-md ${
        pending
          ? "bg-indigo-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white"
      }`}
    >
      {pending ? "Creating..." : "Create Profile"}
    </button>
  );
}
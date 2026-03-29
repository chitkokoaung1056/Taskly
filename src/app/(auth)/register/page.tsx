"use client";

import { useForm } from "react-hook-form";
import { supabase } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const passwordValue = watch("password");

  const onSubmit = async (formData: FormData) => {
    const { email, password } = formData;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Registeration Successful");
    setTimeout(() => {
      router.replace("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\+\-=\[\]{};':"\\|<>?,./`~]).+$/,
                  message:
                    "Password must include uppercase, lowercase, number and special character",
                },
              })}
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 mt-2 rounded-lg cursor-pointer font-semibold transition-all duration-200 shadow-md ${
              isSubmitting
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white"
            }`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

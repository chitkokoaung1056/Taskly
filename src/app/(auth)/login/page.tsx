"use client";

import { useForm } from "react-hook-form";
import { supabase } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    const { email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login Successful");

    setTimeout(() => {
      router.replace("/profile"); // change if needed
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-indigo-50 to-white">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
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

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded-lg cursor-pointer font-semibold transition-all duration-200 shadow-md ${
              isSubmitting
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
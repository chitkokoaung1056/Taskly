import { supabase } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

interface ProfileFormProps {
  userId: string;
}

export default function ProfileForm({ userId }: ProfileFormProps) {
  const createProfile = async (formData: FormData) => {
    "use server";

    const first_name = formData.get("first_name")?.toString();
    const last_name = formData.get("last_name")?.toString();

    if (!first_name || !last_name) return;

    const { error } = await supabase
      .from("profile")
      .insert([{ first_name, last_name, user_id: userId }]);

    if (error) {
      throw new Error(error.message);
    }

    redirect("/dashboard");
  };

  return (
    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Create Your Profile
      </h2>

      <form action={createProfile} className="space-y-5">
        {/* First Name */}
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Button */}
        <SubmitButton />
      </form>
    </div>
  );
}

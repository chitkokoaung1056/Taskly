import ProfileForm from "@/components/ProfileForm";
import { supabase } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  // Get logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check if profile exists
  const { data: existingProfile } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (existingProfile) {
    redirect("/dashboard");
  }

  // Render form
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <ProfileForm  userId={user.id} />
    </div>
  );
}
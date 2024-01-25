"use client";
import UserTable from "@/app/components/UserTable/UserTable";
export default function App({ readings, userData }) {
  return <UserTable readings={readings} userData={userData} />;
}

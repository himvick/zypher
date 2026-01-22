import Image from "next/image";
import AuthenticationBox from "@/components/authenticationbox.tsx";

export default function Home() {
  return (
    <div className="flex flex-col h-lvh w-full justify-center items-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="font-bold text-4xl">Zypher</h1>
        <AuthenticationBox />
      </div>
    </div>
  );
}

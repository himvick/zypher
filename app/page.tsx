import Image from "next/image";
import AuthenticationBox from "@/components/authenticationbox.tsx";

export default function Home() {
  return (
    <div className="flex flex-col h-lvh w-full justify-center items-center">
      <div>
        <AuthenticationBox />
      </div>
    </div>
  );
}

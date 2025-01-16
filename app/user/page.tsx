import { NextPage } from "next";
import LoginBtn from "@/app/user/LoginBtn";
import Script from "next/script"

const User: NextPage = () => {

  return (
    <main>
      <Script
        async={true}
        defer={true}
        strategy={"beforeInteractive"}
        src={"https://accounts.google.com/gsi/client?hl=zh"}
      />
      user center
      <LoginBtn />
    </main>
  );
}

export default User;

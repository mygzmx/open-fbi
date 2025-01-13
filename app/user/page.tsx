import Link from "next/link";
import { NextPage } from "next";

const User: NextPage = () => {
  return (
    <main>
      user center

      <Link href={'/'}>home</Link>
    </main>
  );
}

export default User;

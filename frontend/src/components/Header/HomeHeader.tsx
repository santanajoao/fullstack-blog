import Link from "next/link";
import HeaderWrapper from "./HeaderWrapper";
import BlogLogo from "../BlogLogo";
import UserActions from "./UserActions";

export default function HomeHeader() {
  return (
    <HeaderWrapper>
      <Link href="/">
        <BlogLogo size="small" />
      </Link>

      <UserActions />
    </HeaderWrapper>
  );
}

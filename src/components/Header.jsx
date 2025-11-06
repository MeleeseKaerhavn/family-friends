import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-4 my-2">
        <Link href="/">
         <Image
        src="/familyfriendslogo.svg"
        alt="FamilyFriends"
        width={140}
        height={28}
        priority
        className=""
      />
        </Link>
     
      <IoMdNotificationsOutline size={28} aria-label="Notifications" />
    </header>
  );
}


export default Header;
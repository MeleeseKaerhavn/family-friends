import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/singleview">
      <h1>Home Page</h1>
      <Image
        src="https://placecats.com/neo/300/200"
        alt="placeholdercat"
        width={300}
        height={200}
        priority
      />
    </Link>
  );
}

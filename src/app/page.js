import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <ScrollNav />
      <section className="grid grid-cols-2 gap-4 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </section>
      <Footer />


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

    </div>
    
  );
}

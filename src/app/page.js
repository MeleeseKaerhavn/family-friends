import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";
import pets from "@/data/pets.json";

export default function Home() {
  return (
    <div>
      <Header />
      <ScrollNav />

      <section className="grid grid-cols-2 gap-4 p-4">
        {pets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </section>
      <Footer />

    </div>
    
  );
}

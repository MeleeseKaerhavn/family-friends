"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";
import pets from "@/data/pets.json";

export default function Home() {
  const [filter, setFilter] = useState("Alle"); // "Alle" | "Katte" | "Hunde" | "Andre"

  const filteredPets = useMemo(() => {
    if (filter === "Alle") return pets;
    if (filter === "Katte") return pets.filter(p => (p.species || "").toLowerCase() === "cat");
    if (filter === "Hunde") return pets.filter(p => (p.species || "").toLowerCase() === "dog");
    // "Andre" = anything not Cat/Dog (or missing)
    return pets.filter(p => !["cat", "dog"].includes((p.species || "").toLowerCase()));
  }, [filter]);


  return (
    <div>
      <Header />
      <ScrollNav filter={filter} setFilter={setFilter} />

      <section className="grid grid-cols-2 gap-4 p-4">
        {filteredPets.map(pet => <Card key={pet.id} pet={pet} />)}
        
      </section>
      <Footer />

    </div>
    
  );
}

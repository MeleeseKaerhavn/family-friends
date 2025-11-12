"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { IoChevronBackOutline } from "react-icons/io5";
import Favorite from "@/components/Favorite";
import Tag from "@/components/Tag";
import AdoptButton from "@/components/AdoptButton";
import { useParams } from "next/navigation";
import pets from "@/data/pets.json";
import Link from "next/link";
import { useState } from "react";

function Detalje() {
  const { id } = useParams();
  const pet = pets.find(p => p.id === id);
  if (!pet) return <div className="m-4">Pet not found.</div>;

  return (
    <div className="m-2">
      <Header />

      <div className="grid grid-cols-1 grid-rows-1 w-[90%] m-auto relative">
        <Image
          src={pet.photo.url}
          alt={pet.name}
          width={900}
          height={700}
          className="col-start-1 row-start-1 w-full h-auto object-cover z-0"
          priority
        />

        <div className="col-start-1 row-start-1 z-10 self-start flex justify-between items-start m-4">
          <Link href="/">
          <IoChevronBackOutline className="text-white backdrop-blur-sm bg-white/20 rounded-full p-1 shadow-md cursor-pointer" size={24} />
          </Link>
          <Favorite />

        </div>

        <div className="flex gap-1 col-start-1 row-start-1 self-end rounded-2xl backdrop-blur-sm bg-white/20 z-10 w-36 py-2 px-2 m-6">
          <Image src="/avatar.svg" alt="" width={30} height={30} />
          <p className="text-white">Baton Rouge</p>
        </div>
      </div>

      <h1 className="font-semibold text-3xl m-4">{pet.name}</h1>

      <div className="flex flex-wrap gap-2 mt-2 px-4">
        {pet.tags?.map(t => (
          <Tag key={t.label} label={t.label} color={t.color} textColor="#333" />
        ))}
      </div>

      <section className="m-4 text-gray-600">
        <p>{pet.description}</p>
      </section>

      <AdoptButton text={pet.name} />
    </div>
  );
}

export default Detalje;

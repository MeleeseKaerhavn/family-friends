import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { IoChevronBackOutline } from "react-icons/io5";
import { SlStar } from "react-icons/sl";
import Favorite from "@/components/Favorite";
import Tag from "@/components/Tag";
import AdoptButton from "@/components/AdoptButton";
import pets from "@/data/pets.json";


const detalje = () => {
    return ( 
      <div className="m-2">


        <Header />

        <div className="grid grid-cols-1 grid-rows-1 w-[90%] m-auto relative"> 
        <Image  src="/bigUilli.svg"
        alt="placeholdercat"
        width={300}
        height={300}
        className="col-start-1 row-start-1 w-full h-auto object-cover z-0 "
      />
       <div className="col-start-1 row-start-1 z-10 self-start ">
        <IoChevronBackOutline className=" text-white backdrop-blur-sm bg-white/20 border-none rounded-full p-1 m-4 shadow-md cursor-pointer" size={24} />
        <div className="-mt-10">
          <Favorite />
        </div>
       </div>
      <div className="flex gap-1 col-start-1 row-start-1 self-end rounded-2xl backdrop-blur-sm bg-white/20 border-none z-10 w-36 py-4 px-2 m-6" >
       <Image
       src="/avatar.svg"
        alt="placeholdercat"
        width={30}
        height={30}
       />
        <p className="text-white items-start">Baton Rouge</p>
      </div>
      </div>
      <h1 className="font-semibold text-3xl m-4">Samojed Willie</h1>

      <div className="flex justify-evenly gap-3 overflow-x-auto py-1 ml-4">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
      <section className="m-4 text-gray-600">
        <p>Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde og er venlig over for andre dyr. På trods af sin hvide pels elsker den regn og vandpytter. </p>
      </section>
      <AdoptButton />
      </div>

    
        
     );
}
 
export default detalje;
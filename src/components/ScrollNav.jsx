"use client";
const ScrollNav = ({ filter, setFilter }) => {
  const base = "flex items-center gap-2 rounded-full px-6 py-2 shrink-0 ring-1 ring-[#CACACD]";
  const active = "bg-[#F2968F] text-white ring-0";
  const inactive = "bg-white text-gray-500";


    return ( 
        <div className="pl-4">
      <div className="flex gap-3 overflow-x-auto py-2">
        <button onClick={() => setFilter("Alle")} className={`${base} ${filter === "Alle"   ? active : inactive}`}>
          <img
            src="/all.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Alle</span>
        </button>

        <button onClick={() => setFilter("Katte")}  className={`${base} ${filter === "Katte"  ? active : inactive}`}>
          <img
            src="/cats.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Katte</span>
        </button>

        <button onClick={() => setFilter("Hunde")}  className={`${base} ${filter === "Hunde"  ? active : inactive}`}>
          <img
            src="/dogs.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Hunde</span>
        </button>

        <button onClick={() => setFilter("Andre")}  className={`${base} ${filter === "Andre"  ? active : inactive}`}>
          <img
            src="/all.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Andre</span>
        </button>
      </div>
    </div>

     );
}
 
export default ScrollNav;






    
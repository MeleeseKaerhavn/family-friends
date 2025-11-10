const ScrollNav = () => {
    return ( 
        <div className="pl-4">
      <div className="flex gap-3 overflow-x-auto py-2">
        <button className="flex justify-between items-center gap-2 bg-[#F2968F] text-white rounded-full px-6 py-2 shrink-0">
          <img
            src="/all.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Alle</span>
        </button>

        <button className="flex items-center gap-2 bg-white text-gray-500 rounded-full px-6 py-2 shrink-0 ring-1 ring-[#CACACD]">
          <img
            src="/cats.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Katte</span>
        </button>

        <button className="flex items-center gap-2 bg-white text-gray-500 rounded-full px-6 py-2 shrink-0 ring-1 ring-[#CACACD]">
          <img
            src="/dogs.svg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Hunde</span>
        </button>

        <button className="flex items-center gap-2 bg-white text-gray-500 rounded-full px-4 py-2 shrink-0 ring-1 ring-[#CACACD]">
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






    
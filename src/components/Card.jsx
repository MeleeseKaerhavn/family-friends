import Image from "next/image";
import Link from "next/link";
import { SlStar } from "react-icons/sl";


const Card = () => {
    return ( 
        <div className="card_wrapper bg-white rounded-lg shadow-card w-full">
    <Link href="/singleview">
  <div className="grid grid-cols-1 grid-rows-1 overflow-hidden rounded-lg">

    <Image
      src="/pastelcat.svg"
      alt="placeholdercat"
      width={300}
      height={200}
      className="col-start-1 row-start-1 w-full h-auto max-w-full object-cover z-0 "
    />

    <SlStar
      className="col-start-1 row-start-1 justify-self-end m-2 z-10 text-white bg-gray-500/30 rounded-full p-1 shadow-md cursor-pointer"
      size={24}
      />
  </div>
      </Link>

      <div className="px-4">

  <div className="flex justify-between items-center mt-2">
    <h2 className="my-2 font-semibold">Name</h2>
    <p className="text-gray-500">Age</p>
  </div>
  <p className="text-gray-300 pb-2">Description</p>
</div>
      </div>

     );
}
 
export default Card;
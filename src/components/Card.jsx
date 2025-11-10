import Image from "next/image";
import Link from "next/link";
import Favorite from "./Favorite";

const Card = ({ pet }) => {
  return (
    <div className="card_wrapper bg-white rounded-lg shadow-card w-full">
      <Link href={`/singleview`}>
        <div
          className={`grid grid-cols-1 grid-rows-1 overflow-hidden rounded-lg`}
          style={{ backgroundColor: pet.photo.backgroundColor }}
        >
          <Image
            src={pet.photo.url}
            alt={pet.name}
            width={300}
            height={200}
            className="col-start-1 row-start-1 w-full h-auto max-w-full object-cover z-0 mix-blend-multiply"
          />
          <Favorite />
        </div>
      </Link>

      <div className="px-4">
        <div className="flex justify-between items-center mt-2">
          <h2 className="my-2 font-semibold">{pet.name}</h2>
          <p className="text-gray-500">{pet.ageCategory}</p>
        </div>
        <p className="text-gray-300 pb-2">{pet.breed}</p>
      </div>
    </div>
  );
};

export default Card;

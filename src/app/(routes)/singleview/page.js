import Link from "next/link";
import Image from "next/image";

const detalje = () => {
    return ( 
        <Link href="/">
        <h1>Detalje Page</h1>
        <Image
          src="https://placecats.com/neo_2/300/200"
          alt="placeholdercat"
          width={300}
        height={200}
        priority
        />

        </Link>
     );
}
 
export default detalje;
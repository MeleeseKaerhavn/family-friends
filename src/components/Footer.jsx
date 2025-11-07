import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineStar, HiOutlineChatBubbleOvalLeft, HiOutlineUser } from "react-icons/hi2";


 
const Footer = () => {
    return (  
           <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-sm bg-white/70 border-t border-gray-200">
      <nav className="flex justify-around items-center py-3">
        {/* Home (active) */}
        <button className="flex flex-col items-center text-rose-400">
          <BiHomeAlt size={22} />
        </button>

        {/* Favorites */}
        <button className="flex flex-col items-center text-gray-400">
          <HiOutlineStar size={22} />
        </button>

        {/* Messages */}
        <button className="flex flex-col items-center text-gray-400">
          <HiOutlineChatBubbleOvalLeft size={22} />
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center text-gray-400">
          <HiOutlineUser size={22} />
        </button>
      </nav>
    </footer>
    );
}
 
export default Footer;




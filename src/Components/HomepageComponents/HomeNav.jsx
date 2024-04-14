import { IoHomeOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const HomeNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white shadow-lg p-4 w-full">
        <IoHomeOutline size={30}/>
        <GiProgression size={30}/>
        <div></div>
        <CiCamera size={30}/>
        <CiUser size={30}/>
        <div className="absolute bottom-7 p-3 bg-gradient-to-r from-slate-300 to-blue-500  rounded-full">
            
            <CiSearch size={40}/>

        </div>
    </div>
  )
}

export default HomeNav
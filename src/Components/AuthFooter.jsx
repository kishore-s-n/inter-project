import Button from "./Button"
import { Link } from "react-router-dom"
import GoogleLogo from "../assets/googlelogo.png"
import FbLogo from "../assets/fblogo.png"
const AuthFooter = (props) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Button to="/Home">
                {props.btntext}
            </Button>
            <div className="flex items-center my-4 w-full">
                <hr className="flex-grow border-gray-500 w-full" />
                <span className="mx-4 text-black font-semibold">or</span>
                <hr className="flex-grow border-gray-500 w-full" />
            </div>
            <div className="">
                <i></i>
            </div>
            <div className="flex gap-10 my-7">
                <div className="border-black border-4 p-3 rounded-xl">
                    <img src={GoogleLogo} alt="" className="h-10"/>
                </div>
                <div className="border-black border-4 p-3 rounded-xl">
                    <img src={FbLogo} alt="" className="h-10"/>
                </div>
            </div>
            <Link to={props.to} className='underline'>{props.linktxt}</Link>
        </div>
    )
}

export default AuthFooter
import Button from "../Button"
import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const AuthFooter = (props) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Button to="/WorkoutGoal">
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
                    <FcGoogle size={30}/>
                </div>
                <div className="border-black border-4 p-3 rounded-xl">
                    <FaFacebook size={30} color="Blue" />
                </div>
            </div>
            <Link to={props.to} className='underline'>{props.linktxt}</Link>
        </div>
    )
}

export default AuthFooter
import Button from "./Button"
import { Link } from "react-router-dom"

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
            <Link to={props.to} className='underline'>{props.linktxt}</Link>

        </div>
    )
}

export default AuthFooter
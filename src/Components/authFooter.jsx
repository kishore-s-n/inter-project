import Button from "./Button"

const AuthFooter = (props) => {
    return (
        <div className="w-full flex flex-col">
            <Button to="/Home">
                {props.btntext}
            </Button>
            <div className="flex items-center my-4 w-full">
                <hr className="flex-grow border-gray-500 w-full" />
                <span className="mx-4 text-black font-semibold">or</span>
                <hr className="flex-grow border-gray-500 w-full" />
            </div>

        </div>
    )
}

export default AuthFooter
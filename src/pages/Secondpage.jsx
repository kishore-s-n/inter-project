import Button from "../Components/Button"
import { Contents } from "../Components/Contents"
import LandingPgImg2 from "../assets/login-img-2.png"

const Secondpage = () => {

    return (
        <>
            <div className="page bg-white w-full h-screen flex justify-start flex-col items-center lg:flex-row p-5">
                <img src={LandingPgImg2} alt="Landing page image" className="my-8" />
                <div className="content flex flex-col justify-between my-10 gap-10">
                    <Contents title="Get Burn" para="Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever" />
                    <p>So why are we waiting lets start</p>
                    <div className="authbtns flex gap-5">
                        <Button to="/sign-up">Sign Up</Button>
                        <Button to="/sign-in">Sign In</Button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Secondpage

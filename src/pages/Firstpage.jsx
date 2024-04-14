import LandingPgImg from "../assets/login-img-1.png"
import { Contents } from "../Components/Contents"

const Firstpage = () => {
    return (
        <>
        <div>
            <div className="page bg-white w-full h-screen flex justify-start flex-col items-center lg:flex-row p-5">
                <img src={LandingPgImg} alt="Landing page image" className="my-8" />
                <div className="homecontent flex flex-col justify-between my-10 gap-10">
                    <Contents title="Track Your Goals" para="Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Firstpage

import { useState } from "react"
import WorkoutComp from "../WorkoutComp"
import  Dumbell  from "../../assets/dumbell.png"
import Yoga from "../../assets/yoga.png"

const UpcomingWorkouts= ()=>{
    const[view,setView]=useState('initial')
    const HandleClick=()=>{
        if (view=='initial'){
            setView('detailes')
        }
        else{
            setView('initial')
        }
    }




    return (

        <div className="w-screen flex flex-col items-center max-w-[600px] pt-10 px-5">
            <div className="flex justify-between w-full">
                <h1 className="text-lg font-bold">UpcomingWorkouts</h1>
                <span className="text-slate-400 underline cursor-pointer" onClick={HandleClick}>See more</span>
            </div>
            <ul className="w-full flex flex-col gap-3  mt-7">
                <WorkoutComp imgsrc={Dumbell} title="Full Body WorkOut" datentime="Today, 4pm" />
                <WorkoutComp imgsrc={Yoga} title="Full Body WorkOut" datentime="Today, 4pm" />

            </ul>
        </div>
  )
}

export default UpcomingWorkouts
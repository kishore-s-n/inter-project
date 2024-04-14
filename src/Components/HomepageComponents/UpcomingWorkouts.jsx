import { useState } from "react"
import WorkoutComp from "../WorkoutComp"

const UpcomingWorkouts= ()=>{
    const[View,setView]=useState('initial')
    const HandleClick=()=>{
        if (View=='initial'){
            setView('detailes')
        }
        else{
            setView('initial')
        }
    }

    const Dumbell = "src/assets/dumbell.png"
    const Yoga = "src/assets/yoga.png"



    return (

        <div className="w-screen flex flex-col items-center max-w-[600px] pt-10 px-5">
            <div className="flex justify-between w-full">
                <h1 className="text-lg font-bold">UpcomingWorkouts</h1>
                <span className="text-slate-400 underline cursor-pointer" onClick={HandleClick}>See more</span>
            </div>
            <ul className="w-full flex flex-col gap-3  mt-7">
                <WorkoutComp imgsrc={Dumbell} title="Full Body WorkOut" datentime="Today, 4pm" name="workout1" id="1"/>
                <WorkoutComp imgsrc={Yoga} title="Full Body WorkOut" datentime="Today, 4pm" name="workout2" id="2"/>
            </ul>
        </div>
  )
}

export default UpcomingWorkouts
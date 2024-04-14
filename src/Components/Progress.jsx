import UpcomingWorkouts from "../Components/HomepageComponents/UpcomingWorkouts";
import CalorieGraph from "./HomepageComponents/CalorieGraph";
import Trainlist from "./HomepageComponents/Trainlist";


const Progress = () => {
  return (
    <div className="max-w-[600px] w-screen">
        <h1 className="text-3xl my-10 text-center">Workout Tracker</h1>
        <CalorieGraph />
        <UpcomingWorkouts />      
        <Trainlist />


    </div>
  )
}

export default Progress
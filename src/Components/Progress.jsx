import UpcomingWorkouts from "./HomepageComponents/UpcomingWorkouts";
import CalorieGraph from "./HomepageComponents/CalorieGraph";
import Trainlist from "./HomepageComponents/Trainlist";
import { Link } from 'react-router-dom';


const Progress = () => {
  return (
    <div className="max-w-[600px] w-screen">

      <h1 className="text-3xl my-10 text-center">Workout Tracker</h1>
      <div className="cursor-pointer">
        <Link to="/schedule">
          <CalorieGraph />
        </Link>
      </div>
      <UpcomingWorkouts />
      <Trainlist />
    </div>
  );
};

export default Progress;

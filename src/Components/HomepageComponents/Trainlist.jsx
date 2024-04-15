import Workout from "../../assets/workout.png"

const Trainlist = () => {
  return (
    <div className="w-full my-12 px-5">
        <h1 className="text-xl font-bold text-left mb-7">What Do You Want to Train</h1>
        <div className="bg-[#8CB1FF99] flex items-center  justify-between p-7 rounded-xl">
            <ul>
                <li className="text-[16px]">Full Body Workout</li>
                <li className="text-sm">Arms</li>
                <li className="text-sm">Leg</li>
            </ul>
            <img src={Workout} alt="workout image" className="h-24 w-24 bg-slate-200 rounded-full" />
        </div>
    </div>
  )
}

export default Trainlist
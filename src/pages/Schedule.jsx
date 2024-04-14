import React from 'react'
import ScheduleGraph from '../Components/ScheduleGraph'
import HomeNav from '../Components/HomepageComponents/HomeNav'
import MonthAndDay from '../Components/MonthAndDay'

const Schedule = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-16">Workout Schedule</h1>
        <MonthAndDay />
        <ScheduleGraph />
        <HomeNav />
    </div>
  )
}

export default Schedule
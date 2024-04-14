import HomeNav from "../Components/HomepageComponents/HomeNav";
import Progress from "../Components/Progress";
import Schedule from "../Components/Schedule";

function Home() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    caloriesBurned: [200, 300, 250, 400, 350, 280, 320],
  };

  return (
      <>
        <div className="w-screen flex flex-col items-center justify-center ">
          <h1>Home Page</h1>
          <Progress />
        </div>
          <HomeNav />
      </>
  );
}

export default Home;

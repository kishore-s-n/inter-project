import BackButton from "../Components/Backbtn";
import HomeNav from "../Components/HomepageComponents/HomeNav";
import Progress from "../Components/Progress";

function Home() {
  
  return (
      <>
        <div className="w-screen flex flex-col items-center justify-center ">
          <BackButton />
          <h1>Home Page</h1>
          <Progress />
        </div>
          <HomeNav />
      </>
  );
}

export default Home;

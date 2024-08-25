import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        {/* <div className="flex flex-grow "> */}
        {/* <Sidebar /> */}
        <div className="flex-grow flex flex-col gap-y-10">
          <div className=" flex-grow flex justify-around flex-wrap gap-y-10">
            <div className=" flex flex-row bg-purple-300">
              <Playlist />
            </div>
            {/* <div className=" h-48 w-48 bg-purple-500">a</div>
              <div className=" h-48 w-48 bg-purple-300">b</div>
              <div className=" h-48 w-48 bg-purple-200 ">c</div>
              <div className=" h-48 w-48 bg-purple-300">d</div> */}
          </div>
          {/* <div className="flex-grow flex justify-around flex-wrap gap-y-10">
              <div className=" h-48 w-48 bg-purple-500">a</div>
              <div className=" h-48 w-48 bg-purple-300">b</div>
              <div className=" h-48 w-48 bg-purple-200 ">c</div>
              <div className=" h-48 w-48 bg-purple-300">d</div>
            </div> */}
        </div>
        {/* </div> */}
        <Card />
      </div>
      {/* <Playlist /> */}

      {/* <Login /> */}
    </>
  );
}

export default App;

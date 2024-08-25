import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <div className="flex-grow grid grid-cols-3  justify-items-center justify-center gap-10 p-3">
          <Playlist />
        </div>
        <Card />
      </div>
    </>
  );
}

export default App;

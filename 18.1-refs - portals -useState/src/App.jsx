import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import Time from "./components/TimeStopper.jsx";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <Time title={"LEVER 1"} targetTime={1}/>
        <Time title="LEVER 2" targetTime={5}/>
        <Time title="LEVER 3" targetTime={10}/>
        <Time title="LEVER 4" targetTime={15}/>
      </div>
    </>
  );
}

export default App;

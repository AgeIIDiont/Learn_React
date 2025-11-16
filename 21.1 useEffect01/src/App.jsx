import DemoNoDeps from "./components/Deps_useEffect/DemoNoDeps";
import DemoWithDeps from "./components/Deps_useEffect/DemoWithDeps";
import DemoEmptyDeps from "./components/Deps_useEffect/DemoEmptyDeps";
import CallAPI from "./components/Deps_useEffect/CallAPI";
import Parent from "./components/Mount_setIntreVal/Parent";


function App() {
  return (
    <>
      {/*<CallAPI />
      <hr/>
      <DemoNoDeps />
      <hr/>
      <DemoWithDeps />
      <hr/>
      <DemoEmptyDeps />*/}
      <Parent />
    </>
  );
}

export default App;

import DemoNoDeps from "./components/DemoNoDeps";
import DemoWithDeps from "./components/DemoWithDeps";
import DemoEmptyDeps from "./components/DemoEmptyDeps";

function App() {
  return (
    <>
      <DemoNoDeps />
      <hr/>
      <DemoWithDeps />
      <hr/>
      <DemoEmptyDeps />
    </>
  );
}

export default App;

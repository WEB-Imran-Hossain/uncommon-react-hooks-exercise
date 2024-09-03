import GitHubProfile from "./components/debug/GitHubProfile";
import ListAnimal from "./components/deferred/ListAnimal";
import IdForm from "./components/id/IdForm";
import ParentChild from "./components/imperative/ParentChild";
import ParentComponent from "./components/imperative/ParentComponent";
import Boomer from "./components/insertion/Boomer";
import MyComponent from "./components/insertion/MyComponent";
import LayoutTest from "./components/layoutEffect/LayoutTest";
import FindUser from "./components/transition/FindUser";

function App() {
  return (
  <>
  <GitHubProfile />
  <hr />
  <hr />
  <IdForm />
  <hr />
  <hr />
  <FindUser />
  <hr />
  <hr />
  <ListAnimal />
  <hr />
  <hr />
  <Boomer />
  <hr />
  <hr />
  <MyComponent />
  <hr />
  <hr />
  <ParentChild />
  <hr />
  <hr />
  <ParentComponent />
  <hr />
  <hr />
  <LayoutTest />
  </>
  )
}

export default App;

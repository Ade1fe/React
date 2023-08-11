import HelloPlanents from "./components/HelloPlanents";


function App() {
  return (
    <div className="App">
   <HelloPlanents name = "Earth" />
   <HelloPlanents  name = "Mars"  />
   <HelloPlanents   name = "Pluto" />
    </div>
  );
}

export default App;

import './App.css';

import DestructuringFunctional from './components/DestructuringFunctional';
import DestructuringClass from './components/DestructuringClass';


function App() {
  return (
    <div className="App">
        <DestructuringFunctional name="Ichigo" sword="Zangetsu"/>
        <DestructuringClass name="Naruto" ninjaLevel="Hokage" />
    </div>
  );
}

export default App;

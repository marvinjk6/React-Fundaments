import './App.css';
//import { Greet } from './components/Greet';
//import Welcome from './components/Welcome';
//import Hello from './components/Hello';

import Greet from './components/Greet';
import Welcome from './components/Welcome';

/********** PROPS 
 * 
 * props is an object, in this case 3 objects with a propertie name and heroName with value Bruce, Diana and Clark
 * Props is just an Object that contains the attributes and their values which have been passed from the parent component
 * 
 * Children is the inner HTML of the Greet component, for the properties that we know for show are going to be passed, we passed as attributes, when we have no clue what is going to be passed as a props, or have to pass it in dynamic HTML content, pass it as props.children
 * 
 * Props arw immutable their value cannot be changed
 * 
 */




function App() {
  return (
    <div className="App">
      <h1>Functional Component</h1>

      <Greet  name="Bruce" heroName="Batman">
        <p>This is children props of batman</p>
      </Greet>
      <Greet  name="Clark" heroName="Superman">
        <button>Props children</button>
      </Greet>
      <Greet  name="Diana" heroName="Wondeful Woman"/>

      <h1>Class Component</h1>
      <Welcome name="Naruto" ninjaLevel="Genin">
        <button>naruto children props</button>
      </Welcome>
      <Welcome name="Sakura" ninjaLevel="Chunnin">
        <p>Sakura children props</p>
      </Welcome>
      
    </div>
  );
}

export default App;

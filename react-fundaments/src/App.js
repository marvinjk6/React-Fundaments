import './App.css';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';

//import normal css
import './appStyles.css';
//import modules.css, there is difference in how to import style sheet module
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <StyleSheet primary={true} />
      <Inline />
      <h3 className='error'>Error</h3>
      <h3 className={styles.success}>Sucess</h3>
    </div>
  );
}

export default App;

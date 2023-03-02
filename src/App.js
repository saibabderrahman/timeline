import logo from './logo.svg';
import './App.css';
import DTimeline from './components/Timeline';
import OneTimeLine from './components/OneTimeLine';



function App() {
  

  return (
    <div className="App">
 <div style={{margin:' 2rem  ' ,alignItems:"end"}}>
<button className='button'> CA TODAY 
  <span class="followers">&nbsp;16613.0 $ </span>
</button>
<button className='button'> TRAJET
  <span class="followers">&nbsp;192 </span>
</button>
 </div>
      <DTimeline />

    </div>
  );
}

export default App;
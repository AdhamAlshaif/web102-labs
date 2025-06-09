import './App.css';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <div className="App">
      <h1>My Weekly Schedule 🗓️</h1>
      <h2>This is what my next 7 days look like. </h2> 
      <Calendar />
    </div>
  )
}

export default App;
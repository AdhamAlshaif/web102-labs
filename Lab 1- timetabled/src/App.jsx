import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Fun in NYC</h1>
      <h2>Welcome to NYC, check out this calendar to see where are the best events being hosted in the city.</h2>
      <Calendar />
    </div>
  )
}

export default App;
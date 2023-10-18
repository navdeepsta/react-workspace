import './App.css';
import Weather from './components/Weather';

function App() {
  const forecastData = [
    {
      day: "Monday",
      conditions: "sunny",
      maxTemp: 38,
      wind: 15,
      emoji: "☀️"
    },
    {
      day: "Tuesday",
      conditions: "stormy",
      maxTemp: 26,
      wind: 36,
      emoji: "🌩️"
    },
    {
      day: "Wednesday",
      conditions: "rainy",
      maxTemp: 25,
      wind: 25,
      emoji: "☔"
    },
    {
      day: "Thursday",
      conditions: "cloudy",
      maxTemp: 28,
      wind: 20,
      emoji: "☁️"
    },
    {
      day: "Friday",
      conditions: "sunny",
      maxTemp: 35,
      wind: 16,
      emoji: "☀️"
    },
  ];
  return (
    <div className="App">
       <h1>Weather Forecast</h1>
      {forecastData.map(data => <Weather data={data} />)}
    </div>
  );
}

export default App;

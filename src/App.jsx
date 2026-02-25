import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `http://localhost:5000/weather/${encodeURIComponent(city)}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError("City not found");
        setWeatherData(null);
        return;
      }

      setWeatherData(data);
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-96 text-center">
        <h1 className="font-serif text-3xl font-bold text-sky-900 mb-6">
          Weather Forecasting
        </h1>

        <SearchBar onSearch={fetchWeather} />

        {loading && <p className="mt-4 text-gray-600">Loading...</p>}
        {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}

        {weatherData && (
          <div className="mt-6">
            <WeatherCard weatherData={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
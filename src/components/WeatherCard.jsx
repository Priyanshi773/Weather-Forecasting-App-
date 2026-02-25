import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const condition = weatherData.weather[0].main;
  const temperature = Math.round(weatherData.main.temp);

  return (
    <div className="flex flex-col items-center bg-blue-50/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-80 text-center">
      
      {/* City Name */}
      <h2 className="text-2xl font-bold text-sky-900 mb-1">{weatherData.name}</h2>
      
      {/* Temperature */}
      <h1 className="text-5xl font-extrabold text-blue-600 mb-1">{temperature}°C</h1>
      
      {/* Condition */}
      <p className="text-lg font-medium text-gray-700 mb-4">{condition}</p>

      {/* Weather Icon */}
      <WeatherIcon condition={condition} />

      {/* Weather Details */}
      <WeatherDetails data={weatherData} />

    </div>
  );
};

export default WeatherCard;


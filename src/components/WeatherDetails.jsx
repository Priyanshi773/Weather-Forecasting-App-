const WeatherDetails = ({ data }) => {
  return (
    <div className="font-serif text-gray-700 mt-4 p-4 bg-white/80 rounded-xl shadow-md space-y-3">
      
      <p className="text-lg">
        <span className="font-semibold text-blue-600">Humidity:</span> {data.main.humidity}%
      </p>

      <p className="text-lg">
        <span className="font-semibold text-blue-600">Wind Speed:</span> {data.wind.speed} m/s
      </p>

      <p className="text-lg">
        <span className="font-semibold text-blue-600">Pressure:</span> {data.main.pressure} hPa
      </p>

      <p className="text-lg">
        <span className="font-semibold text-blue-600">Feels Like:</span> {Math.round(data.main.feels_like)}°C
      </p>

    </div>
  );
};

export default WeatherDetails;


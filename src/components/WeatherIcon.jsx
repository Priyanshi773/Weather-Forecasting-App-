import Thunderstorm from "../assets/Thunderstorm.gif";
import Rain from "../assets/Rain.gif";
import Clear from "../assets/Clear.gif";
import Clouds from "../assets/Clouds.gif";
import Snow from "../assets/Snow.gif";

const WeatherIcon = ({ condition }) => {
  const getWeatherGif = () => {
    switch (condition) {
      case "Thunderstorm":
        return Thunderstorm;
      case "Rain":
        return Rain;
      case "Clear":
        return Clear;
      case "Clouds":
        return Clouds;
      case "Snow":
        return Snow;
      default:
        return Clear;
    }
  };

  return (
     <div className=" flex justify-center my-4">
      <img
        src={getWeatherGif()}
        alt={condition}
        className="w-50 h-32 object-contain rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default WeatherIcon;

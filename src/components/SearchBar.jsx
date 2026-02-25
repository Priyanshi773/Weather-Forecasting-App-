import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex justify-center mb-6"
    >
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 w-64 rounded-l-2xl border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-2xl font-semibold hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;


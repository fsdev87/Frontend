import { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <div className="form bg-white shadow-md rounded-lg p-8 mb-8 w-full max-w-md">
        <label className="block mb-4">
          <span className="block text-gray-700 font-semibold mb-2">
            Top Text
          </span>
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-6">
          <span className="block text-gray-700 font-semibold mb-2">
            Bottom Text
          </span>
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
          onClick={() => {
            const index = Math.floor(Math.random() * allMemes.length);
            setMeme((prev) => {
              return {
                ...prev,
                imageUrl: allMemes[index].url || prev.imageUrl,
              };
            });
          }}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div
        className="meme relative w-full max-w-md"
        style={{ height: 400, width: 400 }}
      >
        <img
          src={meme.imageUrl}
          alt="Meme"
          className="w-full h-full object-cover rounded shadow"
          style={{ height: 400, width: 400 }}
        />
        <span className="top absolute left-1/2 top-4 transform -translate-x-1/2 text-white text-2xl font-extrabold uppercase drop-shadow-lg text-center px-2">
          {meme.topText}
        </span>
        <span className="bottom absolute left-1/2 bottom-4 transform -translate-x-1/2 text-white text-2xl font-extrabold uppercase drop-shadow-lg text-center px-2">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}

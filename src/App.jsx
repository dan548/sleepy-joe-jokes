
import { useState } from "react";

const jokes = [
  { text: "Why did Sleepy Joe bring a pillow to the press conference? He thought it was a *dream* job!", img: "joe-pillow.png" },
  { text: "Sleepy Joe tried to sign an executive order... then accidentally signed up for a nap!", img: "joe-nap.png" },
  { text: "Biden's speeches now come with subtitles... for the parts where he dozes off.", img: "joe-subtitles.png" },
  { text: "Joe said he's working around the clock. He meant he naps at noon, 3, and 6.", img: "joe-clock.png" },
  { text: "Why did Sleepy Joe cross the road? To get to the other... wait, what was I saying again?", img: "joe-confused.png" },
  { text: "Sleepy Joe drank 3 coffees. He finally blinked.", img: "joe-coffee.png" },
  { text: "Joe dreamed he won a race... then woke up late for a meeting.", img: "joe-dream.png" },
  { text: "Sleepy Joe snored so loud it triggered the nuclear alert system.", img: "joe-snore.png" },
  { text: "Joe tried Zoom... but thought it was nap time with cameras.", img: "joe-zoom.png" },
  { text: "Joe brought a blanket to Congress. Says it helps with 'executive comfort.'", img: "joe-blanket.png" }
];

const baseUrl = import.meta.env.BASE_URL;

function App() {
  const [jokeIndex, setJokeIndex] = useState(0);

  const nextJoke = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * jokes.length);
    } while (newIndex === jokeIndex);
    setJokeIndex(newIndex);
  };

  const { text, img } = jokes[jokeIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-lg w-full shadow-xl rounded-2xl overflow-hidden bg-gray-100">
        <div className="p-6 flex flex-col items-center">
          <img src={`${baseUrl}${img}`} alt="Meme" className="rounded-xl object-contain max-h-64"/>
          <p className="text-center text-lg font-semibold text-black">{text}</p>
        </div>
      </div>
      <button
        onClick={nextJoke}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Show Another
      </button>
    </div>
  );
}

export default App;

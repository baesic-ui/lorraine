"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [dateChoice, setDateChoice] = useState<string | null>(null);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Ay ayaw?",
      "Dali na beh payag ka na",
      "Please ganda",
      "Libre kita Matcha sa SB",
      "Dagdagan ko Cheesecake?",
      "Picturean kita madami",
      "Promise maganda lahat",
      "Luh ayaw pa din?",
      "Anong gusto ng bebe na yarn",
      "Buuuub",
      "Buuuubbbyyyyy",
      "Buuuubbbuuuuuuu",
      "HAHAHAHAHAHAHA JK LANG DALI NA KASI",
      "WALA KA NA GAGAWIN BUB OKAY? MAG AAYOS KA NA LANG HIHI",
      "HAHAHAHA DALI NAAA WALA NAKO MAISIP",
      "PAYAG KA NA WALA KA CHOICE BLEH"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-200 bg-cover bg-center"
         style={{ backgroundImage: "url('https://img.freepik.com/free-vector/flat-design-wildflower-heart-background_23-2150534238.jpg?semt=ais_hybrid&w=740&q=80')" }}>
      
      {!yesPressed ? (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/w_TT_Bhui78AAAAC/ibunwoo-happy.gif"
            alt="Excited"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      ) : !dateChoice ? (
        <>
          <img src="https://media.tenor.com/LyOuFR9reJ4AAAAi/kuromi-sanrio.gif" alt="Excited" />
          <h2 className="my-4 text-3xl font-bold">
            What kind of date do you want, bub? 💕
          </h2>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setDateChoice("Dinner - Different City")}
              className="rounded bg-pink-500 px-4 py-2 font-bold text-white"
            >
              🍽️ Dinner - Possible late maka-uwi
            </button>

            <button
              onClick={() => setDateChoice("House - Valo/Movie")}
              className="rounded bg-pink-500 px-4 py-2 font-bold text-white"
            >
              🏠 House - SELF PREP HUHU
            </button>

            <button
              onClick={() => setDateChoice("Dinner - Location TBA")}
              className="rounded bg-pink-500 px-4 py-2 font-bold text-white"
            >
              🍽️ Dinner - Medyo malapit lang  
            </button>
          </div>
        </>
      ) : (
        <>
          <img src="https://media.tenor.com/AFLSNpQpHVcAAAAi/my-melody.gif" alt="Happy" />
          <div className="my-4 text-4xl font-bold text-center">
            Yay! {dateChoice} date it is 💖
            <br />
            See you bub hihi 😘
          </div>
        </>
      )}
    </div>
  );
}

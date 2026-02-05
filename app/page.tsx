"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [step, setStep] = useState<
    "start" | "letter" | "question" | "options" | "final"
  >("start");
  const [noCount, setNoCount] = useState(0);
  const [dateChoice, setDateChoice] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");

  const yesButtonSize = noCount * 20 + 16;

  const fullText = `Hi Lorraine 💕,

Gusto ko lang maglaan ng konting oras para sabihin ’to, kasi mahalaga ka at ayokong basta lang palampasin yung nararamdaman ko.

I know we had some arguments these past few days and last week. I'm not trying to bring it up ha? Also, I'm not trying to start a fight. Gusto ko lang maging open kasi for me madaming nagbago. Messages are becoming dry, updates are not being consistent, and even yung endearment wala na. I know you said we're okay—but are we really?

I know how busy you are on everything, lalo sa school. I just hope we can talk more about this kasi I don’t want to get used to what’s happening right now. I want to fix it, and I hope you do as well.

Sabi nga sa TikTok: find someone you want, someone you need, someone you like, and someone you’ll be able to love. For me, that’s you. That’s why I want to know what you want and what you need—because I want to be that person too.

It may sound demanding, but just to be clear, I’m not forcing you to choose me. It’s an offering. I just want to show how sincere my love is for you.

Warning: You won’t be able to check which is which. Once you choose, that’s it.

If you want to stop what we have, that’s okay—you can let me know via chat. But if you want to continue, press the button below.`;

  // Typewriter effect for the letter
  useEffect(() => {
    if (step === "letter") {
      setDisplayedText(""); // reset when entering the letter step
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(interval);
      }, 20); // 20ms per character
      return () => clearInterval(interval);
    }
  }, [step]);

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
      "WALA KA NA GAGAWIN BUB OKAY? MAG AAYOS KA NA LANG HIHI",
      "Buuuub",
      "Buuuubbbyyyyy",
      "Buuuubbbuuuuuuu",
      "HAHAHAHAHAHAHA JK LANG DALI NA KASI",
      "HAHAHAHA DALI NAAA WALA NAKO MAISIP",
      "PAYAG KA NA WALA KA CHOICE BLEH",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-pink-200 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/flat-design-wildflower-heart-background_23-2150534238.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-pink-200 opacity-50"></div>

      <div className="relative z-10 w-full px-4">
        {/* STEP 0: START SCREEN - Open Letter Button with GIF */}
        {step === "start" && (
          <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <img
              src="https://media.tenor.com/o5eIi0N2gQ0AAAAi/ibunwoo-hello.gif"
              alt="Hello GIF"
              className="h-[200px] mb-6"
            />
            <button
              onClick={() => setStep("letter")}
              className="rounded bg-pink-500 px-8 py-4 text-2xl font-bold text-white hover:bg-pink-700"
            >
              Open Letter 💌
            </button>
          </div>
        )}

        {/* STEP 1: LETTER */}
        {step === "letter" && (
          <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6 text-center">💌</h2>

              <p className="text-xl leading-relaxed whitespace-pre-line">
                {displayedText}
              </p>

              {/* Continue button appears once the text has fully appeared */}
              {displayedText === fullText && (
                <div className="text-center">
                  <button
                    onClick={() => setStep("question")}
                    className="mt-8 rounded bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-700"
                  >
                    Continue 💖
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: VALENTINE QUESTION */}
        {step === "question" && (
          <div className="flex flex-col items-center justify-center text-center">
            <img
              className="h-[200px]"
              src="https://media1.tenor.com/m/w_TT_Bhui78AAAAC/ibunwoo-happy.gif"
              alt="Excited"
            />

            <h1 className="my-4 text-4xl font-bold">
              Will you be my Valentine? ❤️
            </h1>

            <div className="flex items-center mt-4">
              <button
                className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setStep("options")}
              >
                ❤️ Yes ❤️
              </button>

              <button
                onClick={handleNoClick}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                {noCount === 0 ? "No 💔" : getNoButtonText()}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: DATE OPTIONS */}
        {step === "options" && !dateChoice && (
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="https://media.tenor.com/LyOuFR9reJ4AAAAi/kuromi-sanrio.gif"
              alt="Choice"
            />

            <h2 className="my-4 text-3xl font-bold">
              What kind of date do you want, bub? 💕
            </h2>

            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => {
                  setDateChoice("Dinner - Different City");
                  setStep("final");
                }}
                className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700"
              >
                🍽️ Dinner - Possible late maka-uwi ❤️
              </button>

              <button
                onClick={() => {
                  setDateChoice("House - Valo/Movie");
                  setStep("final");
                }}
                className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700"
              >
                🏠 House - SELF PREP HUHU ❤️
              </button>

              <button
                onClick={() => {
                  setDateChoice("Dinner - Location TBA");
                  setStep("final");
                }}
                className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700"
              >
                🍽️ Dinner - Medyo malapit lang ❤️
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: FINAL */}
        {step === "final" && (
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="https://media.tenor.com/AFLSNpQpHVcAAAAi/my-melody.gif"
              alt="Yay"
            />

            <div className="my-4 text-4xl font-bold">
              Yay! {dateChoice} date it is 💖
              <br />
              See you bub hihi 😘
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

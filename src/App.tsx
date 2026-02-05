import { useState, useEffect } from "react";

export default function App() {
  const [showOpenLetter, setShowOpenLetter] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [letterContent, setLetterContent] = useState("");
  const [showValentineQuestion, setShowValentineQuestion] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [dateChoice, setDateChoice] = useState<string | null>(null);

  const yesButtonSize = 16 + noCount * 5; // Yes button grows

  const fullLetter = `
Hi Lorraine💕,

Gusto ko lang maglaan ng konting oras para sabihin ‘to, kasi mahalaga ka at ayokong basta lang palampasin yung nararamdaman ko.

I know we had some arguments these past few days and last week. I'm not trying to bring it up ha? Also, I'm not trying to start a fight. Gusto ko lang maging open kasi for me madaming nagbago. Messages are becoming dry, updates are not being consistent and even yung endearment wala na. I know you said we're okay but are we really?

I know how busy you are on everything lalo sa school. I just hope we can talk more regarding about this kasi I dont want to get used to what's happening right now. I want to fix it, I hope you do as well.

Sabi nga sa TikTok, find someone you want, someone you need, you like and you'll be able to love. For me, That's you. That's why if it's okay I want to know what you want and what you need because I want to be that person as well, I know you said I'm nice, understanding and great, etc. But that won't matter if I'm not the one you want and the one you need.

It may sound demanding but just to be clear, I'm not trying to negotiate or forcing you to choose me. It's an offering. I just want to show my Love and how sincere I am sayo.

Warning: You wont be able to check which is which ha? So think before you choose. Once you select an option that's it.

If incase you want to stop what we have right now, That's okay. You can let me know via Chat.

But if you want to continue you can press the "arrow button" to proceed.
`;

  // Typewriter with fade-in
  useEffect(() => {
    if (!showLetter) return;
    let i = 0;
    const interval = setInterval(() => {
      setLetterContent(fullLetter.slice(0, i));
      i++;
      if (i > fullLetter.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [showLetter]);

  const noPhrases = [
    "No 💔",
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
    "HAHAHAHAHAHAHA JK LANG DALI NA KASI",
    "PAYAG KA NA WALA KA CHOICE BLEH",
  ];

  const getNoButtonText = () => noPhrases[Math.min(noCount, noPhrases.length - 1)];
  const handleNoClick = () => setNoCount(noCount + 1);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-pink-200 bg-cover bg-center px-4 text-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/flat-design-wildflower-heart-background_23-2150534238.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pink-200 opacity-50"></div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* STEP 1: Open Letter */}
        {showOpenLetter && (
          <>
            <button
              onClick={() => {
                setShowOpenLetter(false);
                setShowLetter(true);
              }}
              className="rounded bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-700 mb-4"
            >
              Open Letter
            </button>
            <img
              src="https://media.tenor.com/o5eIi0N2gQ0AAAAi/ibunwoo-hello.gif"
              alt="Open Letter GIF"
              className="h-[200px]"
            />
          </>
        )}

        {/* STEP 2: Typewriter Letter */}
        {showLetter && (
          <>
            <div className="max-w-xl bg-pink-50 p-6 rounded shadow-lg mb-4 text-left whitespace-pre-line animate-fade-in">
              {letterContent}
            </div>
            {letterContent.length === fullLetter.length && (
              <button
                onClick={() => {
                  setShowLetter(false);
                  setShowValentineQuestion(true);
                }}
                className="rounded bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-700 mt-4"
              >
                Next 💖
              </button>
            )}
          </>
        )}

        {/* STEP 3: Will you be my Valentine */}
        {showValentineQuestion && !dateChoice && (
          <>
            <h1 className="my-4 text-4xl font-bold">Will you be my Valentine? ❤️</h1>
            <div className="flex flex-col gap-4 mt-4 items-center">
              <button
                className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-transform duration-300"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setDateChoice("Dinner - Different City")}
              >
                ❤️ Yes ❤️
              </button>
              <button
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-transform duration-300"
                onClick={handleNoClick}
              >
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}

        {/* STEP 4: Date Choices */}
        {dateChoice && (
          <>
            <h2 className="my-4 text-3xl font-bold">
              What kind of date do you want, bub? 💕
            </h2>
            <div className="flex flex-col gap-3 mt-2 max-w-md">
              <button
                onClick={() => setDateChoice("Dinner - Different City")}
                className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700"
              >
                🍽️ Dinner - Possible late maka-uwi ❤️
              </button>

              <button
                onClick={() => setDateChoice("House - Valo/Movie")}
                className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700"
              >
                🏠 House - SELF PREP HUHU ❤️
              </button>

              <button
                onClick={() => setDateChoice("Dinner - Location TBA")}
                className="rounded bg-pink-500 px-4 py-2 font-bold text-white hover:bg-pink-700"
              >
                🍽️ Dinner - Medyo malapit lang ❤️
              </button>
            </div>
          </>
        )}

        {/* STEP 5: Final screen */}
        {dateChoice && (
          <div className="mt-6 text-4xl font-bold text-center">
            Yay! {dateChoice} date it is 💖 <br />
            See you bub hihi 😘
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
        }
        .animate-float { animation-name: float; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .animate-fade-in { animation: fadeIn 1s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

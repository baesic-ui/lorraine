"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [yesPressed, setYesPressed] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [letterContent, setLetterContent] = useState("");
  const [dateChoice, setDateChoice] = useState<string | null>(null);

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

  // Typewriter effect
  useEffect(() => {
    if (!showLetter) return;
    let i = 0;
    const interval = setInterval(() => {
      setLetterContent(fullLetter.slice(0, i));
      i++;
      if (i > fullLetter.length) clearInterval(interval);
    }, 20); // adjust speed here
    return () => clearInterval(interval);
  }, [showLetter]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-pink-200 bg-cover bg-center px-4 text-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/flat-design-wildflower-heart-background_23-2150534238.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {!yesPressed ? (
        <>
          <h1 className="text-4xl font-bold mb-8">💌 A Letter for You 💌</h1>
          <button
            onClick={() => setYesPressed(true)}
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
      ) : showLetter ? (
        <>
          <div className="max-w-xl bg-pink-50 p-6 rounded shadow-lg mb-4">
            <p className="whitespace-pre-line text-left">{letterContent}</p>
          </div>
          {letterContent.length === fullLetter.length && (
            <button
              onClick={() => setShowLetter(false)}
              className="rounded bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-700 mt-4"
            >
              Next 💖
            </button>
          )}
        </>
      ) : !dateChoice ? (
        <>
          <h1 className="my-4 text-4xl font-bold">
            Will you be my Valentine? ❤️
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              onClick={() => setShowLetter(true)}
            >
              ❤️ Yes ❤️
            </button>
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              💔 No
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="my-4 text-3xl font-bold">What kind of date do you want, bub? 💕</h2>
          <div className="flex flex-col gap-3 mt-2">
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

      {dateChoice && (
        <div className="mt-6 text-4xl font-bold text-center">
          Yay! {dateChoice} date it is 💖 <br />
          See you bub hihi 😘
        </div>
      )}
    </div>
  );
}

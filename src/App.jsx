import { useState } from "react";
import QuoteBox from "./components/QuoteBox";  // layout for box where user can read quote and ask for another
import "./App.css";


// handful of quotes from celebrities
const quotes = [
  { quote: " There are no mistakes, only opportunities.", author: "Tina Fey" },
  { quote: " Doing the best at this moment puts you in the best place for the next moment.", author: "Oprah Winfrey" },
  { quote: " Be humble, hungry, and always be the hardest worker in the room.", author: "The Rock" },
  { quote: " The minute that you’re not learning I believe you’re dead.", author: "Jack Nicholson" },
  { quote: " Action is the foundational key to all success.", author: "Pablo Picasso" } ,
  { quote: " I think in life you should work on yourself until the day you die.", author: "Serena Williams" },
  { quote: " Don’t feel stupid if you don’t like what everyone else pretends to love.", author: "Emma Watson" },
  { quote: " It is not a daily increase, but a daily decrease. Hack away at the inessentials.", author: "Bruce Lee" },
  { quote: " Whatever you do, do it completely. Don’t do it half-arsed.", author: "Christian Bale"  },
  { quote: " Life is tough, but you just have to just get out of bed, get out and do it.", author: "Anthony Hopkins" },
  { quote: " If you can dream it, you can do it.", author: "Walt Disney" },
  { quote: " Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs"  },
  { quote: " You've got to be in it to win it.", author: "Tony Robbins" } ,
  { quote: " Be persistent and never give up hope.", author: "George Lucas"  },
  { quote: " Don't let yesterday take up too much of today.", author: "Will Rogers" },
];

// shuffling func, jumbles up the quotes
function shuffleQuotes(quotes) {
  let copy = [...quotes];  // new copy without affecting orig
  for (let i = copy.length - 1; i > 0; i--) 
  {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];  // swap positions in copied array
  }
  return copy;  // outputs the shuffled array
}

export default function App() {
  // for updating the shuffled quotes and array index tracker
  const [shuffledQuotes, setShuffledQuotes] = useState(shuffleQuotes(quotes));
  const [index, setIndex] = useState(0);

  // gets another quote for user
  const getNextQuote = () => {
    // jumble the quotes again when gone through all quotes, otherwise just increment
    if (index + 1 >= shuffledQuotes.length) 
    {
      setShuffledQuotes(shuffleQuotes(quotes));
      setIndex(0);
    } 
    else 
    {
      setIndex(index + 1);  // next quote, if asked for
    }
  };

  const current = shuffledQuotes[index];

  return (
  <div>
    <div>
      <h1>
        Inspirational Quotes   {/* main header */}
      </h1>
      <h2>
        (just incase you need a bit of motivation) {/* sub header */}
      </h2>
    </div>
    <div className="app-container">   {/* holds box where quote is shown */}
      <QuoteBox
        quote={current.quote}
        author={current.author}
        onNewQuote={getNextQuote}  
      />
    </div>
  </div>  
  );
}


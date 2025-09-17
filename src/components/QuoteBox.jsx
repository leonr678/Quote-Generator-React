// this component is responsible for the look of the quote ui
function QuoteBox({ quote, author, onNewQuote }) {
  return (
    <div className="quote-box">
      <p className="quote">"{quote}"</p>  {/* grab "quote" from "quotes" array defined in App.jsx*/}
      <p className="author">- {author}</p>  {/* grab "author" from "quotes" array*/}
      <button onClick={onNewQuote}>New Quote</button>  {/* when button clicked, onNewQuote (declared in App.jsx) will be called  */}
    </div>
  );
}

export default QuoteBox;  // to be used in App.jsx

// TODO: add an animated effect when over quote box
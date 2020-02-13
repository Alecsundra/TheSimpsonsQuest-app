import React from 'react';

function DisplayQuote({ quote }) {
  return (
    <div className="DisplayQuote">
      <img
        src={quote.image}
      />
      
        <h3>Character: {quote.character}</h3>
        <p><b>Quote:</b> {quote.quote}</p>
     
    </div>
  );
};

export default DisplayQuote;

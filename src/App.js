import React, { useState } from 'react';
import Quote from './components/Quote';

const initialQuote = {
  text: '',
  author: ''
}

function App() {

  const [quote, setQuote] = useState(initialQuote);



  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button>Another Quote</button>
      <Quote quote={quote} />
    </div>
  );
}

export default App;

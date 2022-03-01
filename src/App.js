import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';

const initialQuote = {
  text: '',
  author: ''
}

function App() {

  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(false)

  const updateQuote = async () => {
    setLoading(true)
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url)
    const [newQuote] = await res.json();

    const { quote: text, author } = newQuote;

    setQuote({
      text,
      author
    })

    setLoading(false)
  }

  useEffect(() => {
    updateQuote();
  }, [])


  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateQuote()}>Another Quote</button>

      {loading ? <h2 class="loading" >Loading...</h2> : <Quote quote={quote} />}

    </div>
  );
}

export default App;

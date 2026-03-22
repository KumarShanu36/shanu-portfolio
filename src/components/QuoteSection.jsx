import { useState } from "react";
import "./QuoteSection.css";

const quoteItems = [
  {
    text: "Great software is built when a developer learns to think clearly before typing anything.",
    author: "Kent Beck",
  },
  {
    text: "Clean systems come from disciplined decisions repeated consistently over time.",
    author: "Unknown",
  },
  {
    text: "The best products feel simple because the engineering behind them is not.",
    author: "Anonymous",
  },
];

const marqueeWords = [
  "PRECISION",
  "TRUST",
  "COLLABORATION",
  "EXCELLENCE",
  "INNOVATION",
  "PROBLEM SOLVING",
];

function renderQuote(text) {
  if (text.includes("developer")) {
    return (
      <>
        Great software is built
        <br />
        when a <span className="quote-accent">developer</span> learns
        <br />
        to <em>think clearly</em> before
        <br />
        <strong>typing anything.</strong>
      </>
    );
  }

  if (text.includes("disciplined")) {
    return (
      <>
        Clean systems come from
        <br />
        <span className="quote-accent">disciplined decisions</span>
        <br />
        repeated <em>consistently</em>
        <br />
        <strong>over time.</strong>
      </>
    );
  }

  return (
    <>
      The best products
      <br />
      feel <span className="quote-accent">simple</span> because
      <br />
      the engineering behind them
      <br />
      <strong>is not.</strong>
    </>
  );
}

function MarqueeRow({ reverse = false }) {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="quote-marquee">
      <div className={`quote-marquee-track ${reverse ? "is-reverse" : ""}`}>
        {items.map((word, index) => (
          <span key={`${word}-${index}`} className="quote-marquee-item">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function QuoteSection() {
  const [index, setIndex] = useState(0);
  const currentQuote = quoteItems[index];

  const nextQuote = () => {
    setIndex((value) => (value + 1) % quoteItems.length);
  };

  return (
    <section className="quote-section">
      <MarqueeRow />

      <div className="quote-body">
        <p className="quote-mark">“</p>
        <h2 className="quote-text">{renderQuote(currentQuote.text)}</h2>
        <p className="quote-author">— {currentQuote.author}</p>

        <button type="button" className="quote-button" onClick={nextQuote}>
          Next Quote
        </button>
      </div>

      <MarqueeRow reverse />
    </section>
  );
}

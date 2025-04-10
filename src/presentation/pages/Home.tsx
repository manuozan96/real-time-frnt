import React from "react";
import "./Home.css";
import { useQuotes } from "../hooks/useQuotes";
import { QuoteForm } from "../components/QuoteForm";
import { QuoteList } from "../components/QuoteList";

export const Home: React.FC = () => {
  const { quotes } = useQuotes();

  return (
    <div className="home-container">
      <h1 className="home-title">Real Time Quotes</h1>
      <div className="home-panels">
        <div className="home-panel">
          <QuoteForm />
        </div>
        <div className="home-panel">
          <QuoteList quotes={quotes} />
        </div>
      </div>
    </div>
  );
};

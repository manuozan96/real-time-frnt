import { useQuotes } from "../hooks/useQuotes";
import { QuoteList } from "../components/QuoteList";
import "./Home.css";

export function Home() {
  const { quotes } = useQuotes();

  return (
    <div className="home-container">
      <h1 className="home-title">📋 Real Time Quotes</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}

import { Quote } from "../../domain/entities/Quote";
import { QuoteCard } from "./QuoteCard";
import "./QuoteList.css";

interface Props {
  quotes: Quote[];
}

export function QuoteList({ quotes }: Props) {
  if (quotes.length === 0) {
    return <p className="quote-empty">No quotes yet...</p>;
  }

  return (
    <ul className="quote-list">
      {quotes.map((quote, index) => (
        <li key={index}>
          <QuoteCard quote={quote} />
        </li>
      ))}
    </ul>
  );
}

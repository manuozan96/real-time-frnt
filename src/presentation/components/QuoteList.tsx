import { Quote } from "../../domain/entities/Quote";
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
        <li key={index} className="quote-card">
          <h3 className="quote-client">{quote.client}</h3>
          <p className="quote-total">Total: ${quote.total}</p>
          <p className="quote-date">{new Date(quote.date).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}

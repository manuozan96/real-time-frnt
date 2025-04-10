import { Quote } from "../../domain/entities/Quote";
import "./QuoteCard.css";

interface Props {
  quote: Quote;
}

export function QuoteCard({ quote }: Props) {
  return (
    <div className="quote-card">
      <h2 className="quote-client">{quote.client}</h2>
      <p className="quote-date">
        Fecha: {new Date(quote.date).toLocaleDateString()}
      </p>

      <ul className="quote-products">
        {quote.products.map((product, index) => (
          <li key={index}>
            {product.name}: ${product.price.toLocaleString()}
          </li>
        ))}
      </ul>

      <p className="quote-total">Total: ${quote.total.toLocaleString()}</p>
    </div>
  );
}

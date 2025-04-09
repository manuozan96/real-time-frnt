import { useEffect, useState } from "react";
import { Quote } from "../../domain/entities/Quote";
import { QuoteService } from "../../application/services/QuoteService";

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const handleNewQuote = (quote: Quote) => {
      setQuotes((prev) => [quote, ...prev]);
    };

    QuoteService.onNewQuote(handleNewQuote);

    return () => {
      QuoteService.offNewQuote(handleNewQuote);
    };
  }, []);

  return { quotes };
}

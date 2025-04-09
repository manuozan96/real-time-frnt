import { Quote } from "../../domain/entities/Quote";
import socket from "../../infrastructure/socket/socketClient";

export class QuoteService {
  static onNewQuote(callback: (quote: Quote) => void) {
    socket.on("new-quote", callback);
  }

  static offNewQuote(callback: (quote: Quote) => void) {
    socket.off("new-quote", callback);
  }
}

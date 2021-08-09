import { Quote } from "./Models";

export interface QuoteRepo {
  getQuote(): Promise<Quote>;
}

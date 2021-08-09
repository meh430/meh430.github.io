import { quoteEndpoint } from "./Data";
import { Quote } from "./Models";
import { QuoteRepo } from "./QuoteRepo";

export class QuoteRepoImpl implements QuoteRepo {
  async getQuote(): Promise<Quote> {
    const error: Quote = {
      author: "Not Found",
      quote: "Not Found",
    };

    try {
      const response = await fetch(quoteEndpoint);
      const responseJson = await response.json();

      if (
        responseJson["contents"] &&
        responseJson["contents"]["quotes"] &&
        responseJson["contents"]["quotes"].length
      ) {
        const quote = responseJson["contents"]["quotes"][0];
        return {
          author: quote.author,
          quote: quote.quote,
        };
      } else {
        return error;
      }
    } catch (e) {
      return error;
    }
  }
}

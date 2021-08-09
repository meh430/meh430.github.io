import { CircularProgress, useTheme } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { QuoteRepo } from "../data/QuoteRepo";

export const QuoteCard = (props: {
  quoteRepo: QuoteRepo;
  visible: boolean;
}) => {
  const theme = useTheme();

  const loading = "Loading...";
  const [quote, setQuote] = useState({ quote: loading, author: loading });

  useEffect(() => {
    (async () => setQuote(await props.quoteRepo.getQuote()))();
  }, [props.quoteRepo]);

  const quoteStyle = {
    padding: "20px",
    width: "90%",
    maxWidth: "770px",
    marginBottom: "20px",
    alignItems: "center",
    display: props.visible ? "block" : "none",
  } as React.CSSProperties;
  const textStyle = {
    margin: "0px",
    padding: "0px",
    fontFamily: "Roboto",
    color: theme.palette.text.primary,
  };
  const qStyle = { margin: "6px" };

  const innerContent = (
    <Fragment>
      <h3 style={textStyle}>
        <i className="fas fa-quote-left" style={qStyle} />
        {quote.quote}
        <i className="fas fa-quote-right" style={qStyle} />
      </h3>
      <h4
        style={{
          ...textStyle,
          width: "100%",
          marginTop: "10px",
          textAlign: "end",
        }}
      >
        - {quote.author}
      </h4>
    </Fragment>
  );

  return (
    <div className="col" style={quoteStyle}>
      {quote.author === loading ? <CircularProgress /> : innerContent}
    </div>
  );
};

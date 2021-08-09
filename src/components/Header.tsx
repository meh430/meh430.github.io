import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { useState, useEffect } from "react";
import { PropsItem } from "../data/Models";
import { QuoteRepoImpl } from "../data/QuoteRepoImpl";
import { QuoteCard } from "./Quote";

export const Header = (props: PropsItem) => {
  const theme = useTheme();

  const heading = props.dataRepo.getHeading();

  const [cursor, setCursor] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      for (let i = 0; i < heading.length; i++) {
        await new Promise((r) => setTimeout(r, 150));
        setMessage((msg) => msg + heading[i]);
      }
    })();

    const cursorInterval = setInterval(() => setCursor((c) => !c), 530);

    return () => {
      clearInterval(cursorInterval);
    };
  }, [heading]);

  const isMobile = useMediaQuery("(max-width: 420px)");

  const headerStyle = {
    fontSize: isMobile ? "28px" : "96px",
    marginTop: "70px",
    marginBottom: "40px",
    padding: "20px",
    textAlign: "center",
    color: theme.palette.text.primary,
  } as React.CSSProperties;

  const cursorStyle = {
    visibility: cursor ? "visible" : "hidden",
    fontWeight: "lighter",
  } as React.CSSProperties;

  return (
    <div className="col" style={{ alignItems: "center" }}>
      <h1 style={headerStyle} onClick={() => setShowQuote((show) => !show)}>
        {message}
        <span style={cursorStyle}>|</span>
      </h1>
      <QuoteCard quoteRepo={new QuoteRepoImpl()} visible={showQuote} />
    </div>
  );
};

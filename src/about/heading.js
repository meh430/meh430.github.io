import React from "react";

export const Heading = (props) => {
    const h2Color = props.dark ? "#E8E8E8" : "#868686";
    const hrColor = props.dark ? "white" : "black";
    const hrBorder = props.dark ? "1px solid white" : "1px solid black";
    return (
        <header style={{ width: "85%", margin: "20px", marginTop: "50px" }}>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", margin: "5px", color: h2Color }}>{props.line1}</h2>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", margin: "5px", color: h2Color }}>{props.line2}</h2>

            <hr
                style={{
                    backgroundColor: hrColor,
                    border: hrBorder,
                    borderRadius: "20px",
                    width: "250px",
                }}
            />
        </header>
    );
};

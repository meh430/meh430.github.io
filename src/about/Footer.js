import React from "react";
import "./footer.css"
export const Footer = (props) => {
    const hrColor = props.dark ? "white" : "black";
    const hrBorder = props.dark ? "1px solid white" : "1px solid black";
    const h3Style = {
        fontSize: "12px",
        color: props.dark ? "white" : "black",
        margin: "0",
        fontFamily: "sans-serif, 'Nunito'"
    };
    return (
        <footer style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", bottom: "-1", width:"100%" }}>
            <hr
                style={{
                    backgroundColor: hrColor,
                    border: hrBorder,
                    borderRadius: "20px",
                    width: "80%",
                }}
            />
            <div className="footDiv">
                <div
                    style={{
                        
                        width: "fit-content",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        margin: "10px",
                    }}
                >                    
                    <span style={{ zIndex: 50, fontSize: "0.9em", fontWeight: "bold" }}>
                        <img
                            src="https://theysaidso.com/branding/theysaidso.png"
                            height="20"
                            width="20"
                            alt="theysaidso.com"
                        />
                        <a
                            href="https://theysaidso.com"
                            title="Powered by quotes from theysaidso.com"
                            style={{ color: "#ccc", marginLeft: "4px", verticalAlign: "middle" }}
                        >
                            They Said So®
                        </a>
                    </span>{" "}
                    <h3 style={h3Style}>Icons from Font Awesome and Icons8</h3>
                    <h3 style={h3Style}>&#169; Mehul Pillai 2020</h3>
                </div>

                <div
                    style={{
                        margin: "10px",
                        width: "fit-content",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <a
                        className="social"
                        style={{ color: "#0072b1" }}
                        href="https://www.linkedin.com/in/mehul-pillai-36b343170/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin" />
                    </a>
                    <a
                        className="social"
                        style={{ color: props.dark ? "white" : "black" }}
                        href="https://github.com/meh430"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-github-square" />
                    </a>
                    <a
                        className="social"
                        style={{ color: "#C13584" }}
                        href="https://www.instagram.com/mehul.pillai/?hl=en"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-instagram-square" />
                    </a>
                    <a
                        className="social"
                        style={{ color: "#4267B2" }}
                        href="https://www.facebook.com/mehul.pillai.50/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-square" />
                    </a>
                    <a
                        className="social"
                        style={{ color: "#D44638" }}
                        href="mailto: mehulpillai30@gmail"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fas fa-envelope" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

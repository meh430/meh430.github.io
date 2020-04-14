import React from "react";

const footStyle = {
    padding: "7%",
};

export class Footer extends React.Component {
    render() {
        return (
            <footer style={footStyle}>
                <hr style={{ width: "97%", border: "1px solid lightgray" }} />
                <a
                    className="fab fa-github"
                    href="https://github.com/meh430"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ float: "left", fontSize: "30px", color: "black", margin: "10px" }}
                ></a>
                <a
                    className="fas fa-envelope"
                    href="mailto: mehulpillai30@gmail"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ float: "left", fontSize: "30px", color: "black", margin: "10px" }}
                ></a>

                <h5 style={{ float: "right", margin: "10px", verticalAlign: "center" }}>Mehul Pillai 2020</h5>
            </footer>
        );
    }
}

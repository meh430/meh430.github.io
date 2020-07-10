import React from "react";

export class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            h2Color: this.props.dark ? "#E8E8E8" : "#868686",
            hrColor: this.props.dark ? "white" : "black",
            hrBorder: this.props.dark ? "1px solid white" : "1px solid black",
        };
    }

    componentDidUpdate(oldProps) {
        if (this.props.dark !== oldProps.dark) {
            console.log(this.props.dark)
            this.setState({
                h2Color: this.props.dark ? "#E8E8E8" : "#868686",
                hrColor: this.props.dark ? "white" : "black",
                hrBorder: this.props.dark ? "1px solid white" : "1px solid black",
            });
        }
    }

    render() {
        return (
            <header style={{ width: "90%", margin: "20px", marginTop: "50px" }}>
                <h2 style={{ fontFamily: "'Nunito', sans-serif", margin: "5px", color: this.state.h2Color }}>
                    {this.props.line1}
                </h2>
                <h2 style={{ fontFamily: "'Nunito', sans-serif", margin: "5px", color: this.state.h2Color }}>
                    {this.props.line2}
                </h2>

                <hr
                    style={{
                        backgroundColor: this.state.hrColor,
                        border: this.state.hrBorder,
                        borderRadius: "20px",
                        width: "250px"
                    }}
                />
            </header>
        );
    }
}

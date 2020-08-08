import "./About.css";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Navbar, Nav, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Interests } from "./Interests";
import { Profile } from "./Profile";
import { Footer } from "./Footer";

const navLink = {
    borderRadius: "5px",
    margin: "3px",
};

const toggle = [
    { name: "Light", value: "1" },
    { name: "Dark", value: "2" },
];

const unfilledMoon = "far fa-moon";
const filledMoon = "fas fa-moon";

export class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: false,
            darkSymbol: unfilledMoon,
        };
    }

    render() {
        return (
            <div className="aboutPage" style={{ backgroundColor: this.state.dark ? "black" : "white" }}>
                <div className="topBar">
                    <Link className="backButton" to="/" style={{ textDecoration: "none" }}>
                        <i className="fas fa-arrow-left"></i>
                        <span data-hover="Back"></span>
                    </Link>
                    <div className="navDark">
                        <i
                            className={this.state.darkSymbol}
                            onClick={() => {
                                this.setState({
                                    dark: !this.state.dark,
                                    darkSymbol: this.state.dark ? unfilledMoon : filledMoon,
                                });
                            }}
                            style={{
                                fontSize: "26px",
                                color: this.state.dark ? "yellow" : "black",
                                cursor: "pointer"
                            }}
                        />
                        <Navbar bg="dark" expand="lg" className="navBar">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav
                                    variant="pills"
                                    className="mr-auto"
                                    defaultActiveKey={
                                        sessionStorage.getItem("nav") ? sessionStorage.getItem("nav") : "projects"
                                    }
                                >
                                    <Nav.Link
                                        as={Link}
                                        style={navLink}
                                        eventKey="projects"
                                        to="/about"
                                        onClick={() => sessionStorage.setItem("nav", "projects")}
                                    >
                                        <h3 className="navText">Projects</h3>
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        style={navLink}
                                        eventKey="education"
                                        to="/about/education"
                                        onClick={() => sessionStorage.setItem("nav", "education")}
                                    >
                                        <h3 className="navText">Education</h3>
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        style={navLink}
                                        eventKey="interests"
                                        to="/about/interests"
                                        onClick={() => sessionStorage.setItem("nav", "interests")}
                                    >
                                        <h3 className="navText">Interests</h3>
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        style={navLink}
                                        eventKey="profile"
                                        to="/about/profile"
                                        onClick={() => sessionStorage.setItem("nav", "profile")}
                                    >
                                        <h3 className="navText">Profile</h3>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path="/about" render={() => <Projects dark={this.state.dark} />} exact />
                        <Route path="/about/education" render={() => <Education dark={this.state.dark} />} />
                        <Route path="/about/interests" render={() => <Interests dark={this.state.dark} />} />
                        <Route path="/about/profile" render={() => <Profile dark={this.state.dark} />} />
                    </Switch>
                </div>
                <Footer dark={this.state.dark} />
            </div>
        );
    }
}

/*<ButtonGroup toggle className="darkToggle">
                            {toggle.map((radio, idx) => (
                                <ToggleButton
                                    className="toggleButton"
                                    key={idx}
                                    type="radio"
                                    variant="secondary"
                                    name="radio"
                                    value={radio.value}
                                    checked={this.state.radioValue === radio.value}
                                    onChange={(e) => this.setState({ radioValue: e.currentTarget.value })}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>*/

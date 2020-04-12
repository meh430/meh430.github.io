import React from 'react'
import { CardDeck } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const deck = {
    margin:"1%"
}

const header = {
    textAlign: "center",
    margin: "2%",
    color: "gray"
}

const card = {
    borderRadius: "10px", borderColor: "#bfbdbf"
}

const fsize = {
    fontSize: "18px"
}
export class Skills extends React.Component {
    render() {
        return (
            <div alight="center" style={{margin: "3%"}}>
                <hr style={{width:"4%"}}/>
                <h1 style={header}>Languages and Frameworks</h1>

                <CardDeck style={deck}>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Java
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            JavaScript
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Kotlin
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            C++
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Python
                        </Card.Body>
                    </Card>
                </CardDeck>

                
                <CardDeck style={deck}>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Dart
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Android Jetpack
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            ReactJS
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Bootstrap
                        </Card.Body>
                    </Card>
                    <Card style={card}>
                        <Card.Body style={fsize}>
                            Flutter
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}
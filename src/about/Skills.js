import React from 'react'
import { Card } from 'react-bootstrap'
const header = {
    textAlign: "center",
    margin: "2%",
    color: "gray"
}

const card = {
    borderRadius: "10px", borderColor: "#bfbdbf", width:"18em"
}

const fsize = {
    fontSize: "18px"
}

const skills = ["Java", "JavaScript", "Kotlin", "C++", "Python", "Dart", "Android Jetpack", "ReactJS", "Bootstrap", "Flutter"]

const getSkillCards = () => {
    let cardList = []
    for (let i = 0; i < skills.length; i++) {
        cardList.push(<li key={`skill_${i}`}><Card style={card}><Card.Body style={fsize}>{skills[i]}</Card.Body></Card></li>)
    }

    return cardList
}

export class Skills extends React.Component {
    render() {
        return (
            <div align="center" style={{ margin: "3%" }}>
                <hr style={{width:"4%"}}/>
                <h1 style={header}>Languages and Frameworks</h1>
                <br />
                <ul style={{width: "90%"}}>
                    {getSkillCards()}
                </ul>
            </div>
        )
    }
}
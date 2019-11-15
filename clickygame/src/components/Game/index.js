import React, {Component} from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import data from "../../data.json";

class Game extends Component{
    state = {
        data:data,
        score: 0,
        topScore: 0
    }
    componentDidMount(){
        this.setState({data: this.shuffle(this.state.data)})
    }
    shuffle = (data) =>{
        console.log("shuffle data function")
        let i= data.length-1;
        while(i>0){
            const j = Math.floor(Math.random() *(i+1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    }
    handleItemClick = (id) => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
            const newItem = {...item};
            if(newItem.id === id){
                if(!newItem.clicked){
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        })
        guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData)
    }
    handleCorrectGuess = (data) => {
        const {topScore, score} = this.state;
        const newScore = score +1;
        const newTopScore = Math.max(newScore, topScore);
        this.setState({
            data: this.shuffle(data),
            score: newScore,
            topScore: newTopScore
        })
    }
    handleIncorrectGuess =(data)=> {
        this.setState({
            data: this.resetData(data),
            score: 0
        })
    }
    resetData = (data) => {
        const resetData = data.map(item => ({...item, clicked:false}));
        return this.shuffle(resetData);
    }
    render(){
        return(
            <div>
                <Nav  score={this.state.score} topScore={this.state.topScore}/>
                <Header/>
                <Container>
                    {this.state.data.map(item => (
                        <ClickItem 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        handleClick ={this.handleItemClick}
                        />
                    ))}
                </Container>
            </div>
        )
    }
}

export default Game;
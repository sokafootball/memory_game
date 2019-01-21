import React, { Component } from 'react';
import './App.css';
import {Game} from './Game'
import {Navbar} from './Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {id: 0, color: 'red', status: 'hidden'},
        {id: 1, color: 'red', status: 'hidden'},
        {id: 2, color: 'blue', status: 'hidden'},
        {id: 3, color: 'blue', status: 'hidden'},
        {id: 4, color: 'yellow', status: 'hidden'},
        {id: 5, color: 'yellow', status: 'hidden'},
        {id: 6, color: 'black', status: 'hidden'},
        {id: 7, color: 'black', status: 'hidden'},
        {id: 8, color: 'pink', status: 'hidden'},
        {id: 9, color: 'pink', status: 'hidden'},
        {id: 10, color: 'green', status: 'hidden'},
        {id: 11, color: 'green', status: 'hidden'},
        {id: 12, color: 'orange', status: 'hidden'},
        {id: 13, color: 'orange', status: 'hidden'},
        {id: 14, color: 'purple', status: 'hidden'},
        {id: 15, color: 'purple', status: 'hidden'}
      ],
      showingCards: 0
    }
    this.handleCardClick = this.handleCardClick.bind(this)
    this.countShowingCards = this.countShowingCards.bind(this)
    this.showCard = this.showCard.bind(this)
    this.compareCards = this.compareCards.bind(this)
  }

  countShowingCards = () => {
    let showingCards = 0
    this.state.cards.forEach(card => {if(card.status === 'showing')showingCards++})
    this.setState({showingCards})
    console.log(this.state.showingCards)
  }

  showCard = (clickedCard, id) => {
    if(clickedCard.status === 'hidden' && this.state.showingCards < 2){
      clickedCard.status = 'showing'
      let newCards = this.state.cards.slice()
      newCards = newCards.map(card => (card.id === id ? clickedCard : card))
      this.setState({cards: newCards})
      console.log(this.state)
      }
    }

  handleCardClick = (id) => {
    console.log('button clicked')
    // console.log(this.state)
    const clickedCard = this.state.cards.filter((card) => card.id === id)[0]
    this.showCard(clickedCard, id)
    this.countShowingCards()
    if(this.state.showingCards === 2){
      this.compareCards()
    }
    // console.log(this.state)
  }

  compareCards = () => {
    let comparedCards = this.state.cards.filter((card) => card.status === 'showing')
    // console.log(`card A id is ${comparedCards[0].id} and its color is ${comparedCards[0].color}`)
    // console.log(`card B id is ${comparedCards[1].id} and its color is ${comparedCards[1].color}`)
    // console.log(comparedCards[0].color === comparedCards[1].color)
    const isMatch = comparedCards[0].color === comparedCards[1].color
    comparedCards.forEach(card => {isMatch ? card.status = 'matched' : card.status = 'hidden'})
    // console.log(`card A status is ${comparedCards[0].status}`)
    // console.log(`card B status is ${comparedCards[1].status}`)
    let newCards = this.state.cards.slice()
    newCards = newCards.map(newCard => {
      if(comparedCards.some(card => card.id === newCard.id)){
        isMatch ? newCard.status = 'matched' : newCard.status = 'hidden'
      }
      return newCard
    })
    this.setState({newCards})
  }

    //if there is another showing card
        //if they match
          //change their status to matched
          //if all cards match
            //game is won
        //if they do not match
          //change their status to hidden
  render() {
    return (
      <div className="App">
        <Navbar />
        <Game cards={this.state.cards} handleCardClick={this.handleCardClick}/>
      </div>
    );
  }
}





export default App;

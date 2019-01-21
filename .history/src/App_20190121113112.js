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
    this.newGame = this.newGame.bind(this)
    setTimeout(this.shuffleCards, 50)
  }

  countShowingCards = () => {
    console.log('countShowingCards called')
    let showingCards = 0
    this.state.cards.forEach(card => {if(card.status === 'showing')showingCards++})
    this.setState({showingCards}, () => {
      console.log(this.state.showingCards)
      if(this.state.showingCards === 2){
        this.compareCards()
      }
    })
  }

  showCard = (clickedCard, id) => {
    console.log('showCard called')
    if(clickedCard.status === 'hidden' && this.state.showingCards < 2){
      clickedCard.status = 'showing'
      let newCards = this.state.cards.slice()
      newCards = newCards.map(card => (card.id === id ? clickedCard : card))
      this.setState({cards: newCards}, this.countShowingCards)
      }
    }

  handleCardClick = (id) => {
    console.log('button clicked')
    const clickedCard = this.state.cards.filter((card) => card.id === id)[0]
    this.showCard(clickedCard, id)
  }

  compareCards = () => {
    console.log('compareCards called')
    let comparedCards = this.state.cards.filter((card) => card.status === 'showing')
    const isMatch = comparedCards[0].color === comparedCards[1].color
    setTimeout(() => {
      comparedCards.forEach(card => {isMatch ? card.status = 'matched' : card.status = 'hidden'})
      let newCards = this.state.cards.slice()
      newCards = newCards.map(newCard => {
        if(comparedCards.some(card => card.id === newCard.id)){
          isMatch ? newCard.status = 'matched' : newCard.status = 'hidden'
        }
        return newCard
      })
      this.setState({newCards, showingCards:0})
    }, 1000)
  }

  shuffleCards = () => {
    console.log('ShuffleCards called')
    let myCards = this.state.cards.slice()
    for (let i = myCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [myCards[i], myCards[j]] = [myCards[j], myCards[i]];
    }
    this.setState({cards: myCards}, console.log(this.state.cards))
  }

  newGame = () => {
    //shuffle cards
    this.shuffleCards()
    //set all cards to hidden and showing cards to 0
    let myCards = this.state.cards
    myCards.forEach(card => card.status = 'hidden')
    this.setState({cards: myCards, showingCards: 0})
  }

  render() {
    return (
      <div className="App">
        <Navbar
        newGame={this.newGame}
        />
        <Game
        cards={this.state.cards}
        handleCardClick={this.handleCardClick}
        />
      </div>
    );
  }
}

export default App;
